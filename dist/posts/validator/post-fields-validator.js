"use strict";
const Joi = require("joi");
const common_regex_1 = require("../../common/validator/common-regex");
const entity_names_1 = require("../../common/dictionary/entity-names");
const commonInputFieldsSchema = {
    blockchain_id: Joi.string().required(),
    title: Joi.string().required(),
    leading_text: Joi.string().required().allow(...[null, '']),
    description: Joi.string().required(),
    entity_name_for: Joi.string().required().valid(...[entity_names_1.USERS, entity_names_1.ORGANIZATIONS]),
    entity_images: Joi.object().required(),
    entity_tags: Joi.array().required().items(Joi.string().min(1)),
    created_at: Joi.string().required().regex(common_regex_1.DATETIME_STRING_UTC_REGEX),
    updated_at: Joi.string().required().regex(common_regex_1.DATETIME_STRING_UTC_REGEX),
};
const blockchainContentFieldsSchema = Object.assign(Object.assign({}, commonInputFieldsSchema), { author_account_name: Joi.string().length(12).required(), entity_blockchain_id_for: Joi.string().required() });
const blockchainContentFieldsFromOrganizationSchema = Object.assign(Object.assign({}, blockchainContentFieldsSchema), { organization_blockchain_id: Joi.string().required() });
const commonOptions = {
    abortEarly: false,
    allowUnknown: false,
};
class PostFieldsValidator {
    static validatePublicationFromEntity(objectToValidate, entityName) {
        switch (entityName) {
            case entity_names_1.USERS:
                return this.validatePublicationFromUser(objectToValidate);
            case entity_names_1.ORGANIZATIONS:
                return this.validatePublicationFromOrganization(objectToValidate);
            default:
                throw new TypeError(`Unsupported entityName: ${entityName}`);
        }
    }
    static validatePublicationFromUser(objectToValidate) {
        const schema = Joi.object()
            .keys(blockchainContentFieldsSchema)
            .options(commonOptions);
        return schema.validate(objectToValidate);
    }
    static validatePublicationFromOrganization(objectToValidate) {
        const schema = Joi.object()
            .keys(blockchainContentFieldsFromOrganizationSchema)
            .options(commonOptions);
        return schema.validate(objectToValidate);
    }
}
module.exports = PostFieldsValidator;
