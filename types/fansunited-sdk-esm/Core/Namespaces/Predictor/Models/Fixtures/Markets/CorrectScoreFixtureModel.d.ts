import { MarketEnum } from "../../../Enums/MarketEnum";
import ValueCorrectScore from "../../Value/ValueCorrectScore";
import FixturesModel from "../FixturesModel";
export default class CorrectScoreFixtureModel implements FixturesModel {
    matchId: string;
    market: MarketEnum;
    matchType: string;
    prediction: ValueCorrectScore;
    constructor(matchId: string, market: MarketEnum, value: string);
}
