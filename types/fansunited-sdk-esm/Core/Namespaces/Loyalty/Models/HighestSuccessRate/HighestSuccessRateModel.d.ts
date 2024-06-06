import ProfileModel from "../../../Profile/Models/ProfileModel";
export default class HighestSuccessRateModel {
    position: number;
    points: number;
    predictionsMade: number;
    profileId: string;
    profileModel: ProfileModel;
    successRatePercent: number;
}
