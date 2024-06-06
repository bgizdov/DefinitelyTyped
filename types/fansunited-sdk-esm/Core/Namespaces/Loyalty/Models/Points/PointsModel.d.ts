import Points from "./Points";
import PointsValueModel from "./PointsValueModel";
export default class PointsModel {
    general: Points[];
    predictor: PointsValueModel[];
    activity: PointsValueModel[];
    topX: PointsValueModel[];
    matchQuiz: PointsValueModel[];
    discussionPost: PointsValueModel[];
}
