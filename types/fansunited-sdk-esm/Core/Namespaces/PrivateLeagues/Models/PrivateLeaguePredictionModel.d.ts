import PredictionResponseModel from "../../Predictor/Models/Predictions/PredictionResponseModel";
import ProfileModel from "../../Profile/Models/ProfileModel";
export default class PrivateLeaguePredictionModel {
    predictionId: string;
    predictionModel: PredictionResponseModel;
    profileId: string;
    profileModel: ProfileModel;
}
