import GameResultsModel from "./GameResultsModel";
import TiebreakerModel from "./TiebreakerModel";
export default class GameModel {
    userId: string;
    points: number;
    results: GameResultsModel[];
    tiebreaker: TiebreakerModel;
}
