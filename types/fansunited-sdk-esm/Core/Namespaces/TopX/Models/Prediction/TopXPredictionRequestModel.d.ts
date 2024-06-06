import CorrectScoreFixtureModel from "../../../Predictor/Models/Fixtures/Markets/CorrectScoreFixtureModel";
import TiebreakerModel from "../Games/TiebreakerModel";
export default class TopXPredictionRequestModel {
    gameInstanceId: string;
    fixtures: CorrectScoreFixtureModel[];
    tiebreaker?: TiebreakerModel;
    constructor(topXPrediction: any);
}
