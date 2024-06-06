import { ValidationResponseEnum } from "../Enums/ValidationResponseEnum";
import MessageLogModel from "./MessageLogModel";
export default class AuthProviderValidationModel {
    validation: ValidationResponseEnum;
    message: MessageLogModel;
    getIdToken: any;
    logout: any;
}
