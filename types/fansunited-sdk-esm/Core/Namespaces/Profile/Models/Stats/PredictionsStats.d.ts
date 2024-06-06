import GamePredictionsStats from "./GamePredictionsStats";
import SinglePredictionsStats from "./SinglePredictionsStats";
export default class PredictionsStats {
    single: SinglePredictionsStats;
    topX: GamePredictionsStats;
    matchQuiz: GamePredictionsStats;
}
