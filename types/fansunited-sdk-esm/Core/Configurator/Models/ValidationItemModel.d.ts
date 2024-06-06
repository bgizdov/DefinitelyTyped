import { ValidationResponseEnum } from "../Enums/ValidationResponseEnum";
import MessageLogModel from "./MessageLogModel";
export default class ValidationItemModel {
    validation: ValidationResponseEnum;
    message: MessageLogModel;
}
