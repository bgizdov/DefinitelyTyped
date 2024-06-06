import ClassicQuizBasicModel from "./ClassicQuizBasicModel";
import ClassicQuizQuestionModel from "./ClassicQuizQuestionModel";
export default class ClassicQuizFullModel extends ClassicQuizBasicModel {
    rules: string;
    questions: ClassicQuizQuestionModel[];
}
