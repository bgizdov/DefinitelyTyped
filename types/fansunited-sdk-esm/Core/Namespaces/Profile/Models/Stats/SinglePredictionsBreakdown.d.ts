import CompetitionBasicModel from "../../../Football/Models/Competition/CompetitionBasicModel";
import TeamBasicModel from "../../../Football/Models/Team/TeamBasicModel";
export default class SinglePredictionsBreakdown {
    entityId: string;
    entityType: string;
    entitySource: string;
    model: CompetitionBasicModel | TeamBasicModel;
    predictionsMade: number;
    correct: number;
    points: number;
}
