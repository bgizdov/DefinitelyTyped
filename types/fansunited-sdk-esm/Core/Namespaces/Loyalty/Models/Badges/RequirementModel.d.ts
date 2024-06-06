export default class RequirementModel {
    points: number;
    gameParticipationCount: number;
    entityId: string;
    entityType: "competition" | "team" | null;
    predictionsMade: number;
    correctPredictions: number;
}
