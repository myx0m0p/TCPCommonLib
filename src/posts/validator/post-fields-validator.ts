import Joi = require('joi');
import { DATETIME_STRING_UTC_REGEX } from '../../common/validator/common-regex';
import { ORGANIZATIONS, USERS } from '../../common/dictionary/entity-names';

const commonInputFieldsSchema = {
  blockchain_id: Joi.string().required(),

  title: Joi.string().required(),
  leading_text: Joi.string().required().allow(...[null, '']),
  description: Joi.string().required(),

  entity_name_for: Joi.string().required().valid(...[USERS, ORGANIZATIONS]),

  entity_images: Joi.object().required(),
  entity_tags: Joi.array().required().items(Joi.string().min(1)),

  created_at: Joi.string().required().regex(DATETIME_STRING_UTC_REGEX),
  updated_at: Joi.string().required().regex(DATETIME_STRING_UTC_REGEX),
};

const blockchainContentFieldsSchema = {
  ...commonInputFieldsSchema,
  author_account_name: Joi.string().length(12).required(),
  entity_blockchain_id_for: Joi.string().required(),
};

const blockchainContentFieldsFromOrganizationSchema = {
  ...blockchainContentFieldsSchema,
  organization_blockchain_id: Joi.string().required(),
};

const commonOptions = {
  abortEarly: false,
  allowUnknown: false,
};

class PostFieldsValidator {
  public static validatePublicationFromEntity(objectToValidate: any, entityName: string) {
    switch (entityName) {
      case USERS:
        return this.validatePublicationFromUser(objectToValidate);
      case ORGANIZATIONS:
        return this.validatePublicationFromOrganization(objectToValidate);
      default:
        throw new TypeError(`Unsupported entityName: ${entityName}`);
    }
  }

  private static validatePublicationFromUser(objectToValidate: any) {
    const schema = Joi.object()
      .keys(blockchainContentFieldsSchema)
      .options(commonOptions);

    return schema.validate(objectToValidate);
  }

  private static validatePublicationFromOrganization(objectToValidate: any) {
    const schema = Joi.object()
      .keys(blockchainContentFieldsFromOrganizationSchema)
      .options(commonOptions);

    return schema.validate(objectToValidate);
  }
}

export = PostFieldsValidator;
