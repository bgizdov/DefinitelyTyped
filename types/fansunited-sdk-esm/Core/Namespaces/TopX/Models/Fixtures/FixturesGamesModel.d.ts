import MatchBasicModel from "../../../Football/Models/Match/MatchBasicModel";
import MatchStatus from "../../../Football/Models/Match/Status/MatchStatus";
import { MarketEnum } from "../../../Predictor/Enums/MarketEnum";
export default class FixturesGamesModel {
    matchId: string;
    matchType: string;
    market: MarketEnum;
    matchModel: MatchBasicModel;
    matchStatus: MatchStatus;
}
