import { ReportReasonType } from "../Types/types";
export default class ReportModel {
    userId: string;
    reason: ReportReasonType;
    reasonDetails: string;
}
