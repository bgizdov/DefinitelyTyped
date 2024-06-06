import PlayerBasicModel from "../../../Football/Models/Player/PlayerBasicModel";
import ResultModel from "../../../Predictor/Models/Fixtures/ResultModel";
export default class PredictionMatchQuizModel {
    value: any;
    target?: number;
    playerId?: string;
    playerModel?: PlayerBasicModel;
    result: ResultModel;
}
