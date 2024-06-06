import ClassicQuizParticipationQuestionModel from "./ClassicQuizParticipationQuestionModel";
export default class ClassicQuizParticipationModel {
    classicQuizId: string;
    userId: string;
    questions: ClassicQuizParticipationQuestionModel[];
    correctOptions: number;
}
