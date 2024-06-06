import MiniGameImages from "../MiniGameImages";
import ClassicQuizOptionModel from "./ClassicQuizOptionModel";
export default class ClassicQuizQuestionModel {
    questionId: number;
    question: string;
    images: MiniGameImages;
    options: ClassicQuizOptionModel[];
}
