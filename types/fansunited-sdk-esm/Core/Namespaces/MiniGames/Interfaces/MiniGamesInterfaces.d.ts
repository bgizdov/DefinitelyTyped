import EitherOrParticipationModel from "../Models/EitherOr/Participation/EitherOrParticipationModel";
export interface EitherOrParticipationCallback {
    onTimerTick: (seconds: number) => void;
    onElapsedResponse: (response: EitherOrParticipationModel) => void;
}
