import MatchBasicModel from "../../../Football/Models/Match/MatchBasicModel";
import { MarketEnum } from "../../Enums/MarketEnum";
import FixturesPredictionModel from "./FixturesPredictionModel";
import ResultModel from "./ResultModel";
export default class FixturesResponseModel {
    market: MarketEnum;
    matchId: string;
    matchType: string;
    matchModel: MatchBasicModel;
    prediction: FixturesPredictionModel;
    result: ResultModel;
}
