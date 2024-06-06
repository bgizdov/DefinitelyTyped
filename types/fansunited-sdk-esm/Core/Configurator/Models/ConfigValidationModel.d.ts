import ValidationItemModel from "./ValidationItemModel";
export default class ConfigValidationModel {
    apiKey: ValidationItemModel;
    environment: ValidationItemModel;
    idSchema: ValidationItemModel;
    clientId: ValidationItemModel;
    lang: ValidationItemModel;
    errorHandlingMode: ValidationItemModel;
    authProvider: any;
    isValid: boolean;
}
