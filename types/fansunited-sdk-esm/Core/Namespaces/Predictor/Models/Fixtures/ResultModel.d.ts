import { OutcomeEnum } from "../../Enums/OutcomeEnum";
export default class ResultModel {
    settledAt: string;
    resettledAt: string;
    status: string;
    outcome: OutcomeEnum;
    points: number;
}
