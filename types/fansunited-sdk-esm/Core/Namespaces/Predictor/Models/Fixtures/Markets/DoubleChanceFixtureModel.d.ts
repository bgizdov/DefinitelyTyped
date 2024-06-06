import { MarketEnum } from "../../../Enums/MarketEnum";
import { DoubleChanceEnum } from "../../../Enums/ValueEnums";
import ValueDoubleChance from "../../Value/ValueDoubleChance";
import FixturesModel from "../FixturesModel";
export default class DoubleChanceFixtureModel implements FixturesModel {
    matchId: string;
    market: MarketEnum;
    matchType: string;
    prediction: ValueDoubleChance;
    constructor(matchId: string, value: DoubleChanceEnum);
}
