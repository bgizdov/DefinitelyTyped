import EitherOrParticipationStepsOptionModel from "./EitherOrParticipationStepsOptionModel";
export default class EitherOrParticipationStepsModel {
    pairId: string;
    userSelection: string;
    correct: boolean;
    played: boolean;
    timestamp: string;
    optionOne: EitherOrParticipationStepsOptionModel;
    optionTwo: EitherOrParticipationStepsOptionModel;
}
