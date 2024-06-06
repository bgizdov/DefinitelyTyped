import FixturesModel from "../FixturesModel";
import ValueOneXTwo from "../../Value/ValueOneXTwo";
import { MarketEnum } from "../../../Enums/MarketEnum";
import { OneXTwoEnum } from "../../../Enums/ValueEnums";
export default class OneXTwoFixtureModel implements FixturesModel {
    matchId: string;
    market: MarketEnum;
    matchType: string;
    prediction: ValueOneXTwo;
    constructor(matchId: string, market: MarketEnum, value: OneXTwoEnum);
}
