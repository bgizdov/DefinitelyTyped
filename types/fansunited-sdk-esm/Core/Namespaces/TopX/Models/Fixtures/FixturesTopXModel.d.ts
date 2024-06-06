import MatchBasicModel from "../../../Football/Models/Match/MatchBasicModel";
import MatchStatus from "../../../Football/Models/Match/Status/MatchStatus";
import { MarketEnum } from "../../../Predictor/Enums/MarketEnum";
import PredictionTopXModel from "../Prediction/PredictionTopXModel";
export default class FixturesTopXModel {
    matchId: string;
    matchType: string;
    market: MarketEnum;
    matchModel: MatchBasicModel;
    matchStatus: MatchStatus;
    prediction: PredictionTopXModel;
}
