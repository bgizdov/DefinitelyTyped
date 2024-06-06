import MatchBasicModel from "../../../Football/Models/Match/MatchBasicModel";
import MatchStatus from "../../../Football/Models/Match/Status/MatchStatus";
import PlayerBasicModel from "../../../Football/Models/Player/PlayerBasicModel";
import { MarketEnum } from "../../../Predictor/Enums/MarketEnum";
export interface MarketsResults {
    matchId: string;
    market: MarketEnum;
    result: string | string[] | boolean;
    matchModel: MatchBasicModel;
    matchStatus: MatchStatus;
    playerModels?: PlayerBasicModel[];
}
export interface TieBreakersType {
    goldenGoals: GoldenGoalsType[];
}
export interface GoldenGoalsType {
    minute: number;
    matchId: string;
    matchModel: MatchBasicModel;
    playerId: string;
    playerModel: PlayerBasicModel;
    goalType: string;
}
export default class GameMarketsResults {
    gameId: string;
    results: MarketsResults[];
    tieBreakers: TieBreakersType;
}
