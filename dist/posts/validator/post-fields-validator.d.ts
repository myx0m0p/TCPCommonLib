/// <reference types="hapi__joi" />
import Joi = require('@hapi/joi');
declare class PostFieldsValidator {
    static validatePublicationFromEntity(objectToValidate: any, entityName: string): Joi.ValidationResult;
    private static validatePublicationFromUser;
    private static validatePublicationFromOrganization;
}
export = PostFieldsValidator;
