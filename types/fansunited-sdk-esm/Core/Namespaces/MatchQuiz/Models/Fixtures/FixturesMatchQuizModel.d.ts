import MatchBasicModel from "../../../Football/Models/Match/MatchBasicModel";
import MatchStatus from "../../../Football/Models/Match/Status/MatchStatus";
import { MarketEnum } from "../../../Predictor/Enums/MarketEnum";
import PredictionMatchQuizModel from "../Prediction/PredictionMatchQuizModel";
export default class FixturesMatchQuizModel {
    matchId: string;
    matchType: string;
    market: MarketEnum;
    matchModel: MatchBasicModel;
    matchStatus: MatchStatus;
    prediction: PredictionMatchQuizModel;
}
