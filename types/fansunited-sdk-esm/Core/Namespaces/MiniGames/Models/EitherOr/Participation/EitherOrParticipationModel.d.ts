import EitherOrParticipationStepsModel from "./EitherOrParticipationStepsModel";
export default class EitherOrParticipationModel {
    instanceId: string;
    eitherOrId: string;
    gameStartedAt: string;
    currentStep: number;
    currentStreak: number;
    remainingSteps: number;
    currentLives: number;
    currentPoints: number;
    personalBest: number;
    steps: EitherOrParticipationStepsModel[];
}
