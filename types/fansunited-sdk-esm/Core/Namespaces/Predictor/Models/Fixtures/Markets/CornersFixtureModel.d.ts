import { MarketEnum } from "../../../Enums/MarketEnum";
import ValueCorners from "../../Value/ValueCorners";
import FixturesModel from "../FixturesModel";
export default class CornersFixtureModel implements FixturesModel {
    matchId: string;
    market: MarketEnum;
    matchType: string;
    prediction: ValueCorners;
    constructor(matchId: string, value: number);
}
