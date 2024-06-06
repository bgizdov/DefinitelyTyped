import ClassicQuizzesModel from "../ClassicQuiz/ClassicQuizzesModel";
import ClassicQuizFullModel from "../ClassicQuiz/ClassicQuizFullModel";
import ClassicQuizParticipationModel from "../ClassicQuiz/ClassicQuizParticipationModel";
import ClassicQuizParticipationBodyModel from "../ClassicQuiz/ClassicQuizParticipationBodyModel";
import ClassicQuizUserParticipation from "../ClassicQuiz/ClassicQuizUserParticipationModel";
export default class ClassicQuizRemapper {
    remapClassicQuizzes: (response: any) => ClassicQuizzesModel;
    remapClassicQuizById: (response: any) => ClassicQuizFullModel;
    remapClassicQuizParticipation: (participation: any) => ClassicQuizParticipationModel;
    remapClassicQuizParticipationBody: (body: ClassicQuizParticipationBodyModel[]) => {
        question_id: number;
        option_id: number;
    }[];
    remapUserClassicQuizParticipations: (userParticipations: any[]) => ClassicQuizUserParticipation[];
    private remapMetaPagination;
    private remapBasicClassicQuiz;
    private remapQuestions;
    private remapOptions;
    private remapParticipationQuestions;
    private remapContext;
}
