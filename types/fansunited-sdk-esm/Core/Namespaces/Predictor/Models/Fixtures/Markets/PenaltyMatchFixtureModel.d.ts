import { MarketEnum } from "../../../Enums/MarketEnum";
import ValueBoolean from "../../Value/ValueBoolean";
import FixturesModel from "../FixturesModel";
export default class PenaltyMatchFixtureModel implements FixturesModel {
    matchId: string;
    market: MarketEnum;
    matchType: string;
    prediction: ValueBoolean;
    constructor(matchId: string, value: boolean);
}
