import { MarketEnum } from "../../../Enums/MarketEnum";
import { HalfTimeFullTimeEnum } from "../../../Enums/ValueEnums";
import ValueHalfTimeFullTime from "../../Value/ValueHalfTimeFullTime";
import FixturesModel from "../FixturesModel";
export default class HalfTimeFullTimeFixtureModel implements FixturesModel {
    matchId: string;
    market: MarketEnum;
    matchType: string;
    prediction: ValueHalfTimeFullTime;
    constructor(matchId: string, value: HalfTimeFullTimeEnum);
}
