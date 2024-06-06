import ProfileModel from "../../../Profile/Models/ProfileModel";
export default class LeaderboardModel {
    position: number;
    profileId: string;
    profileModel: ProfileModel;
    points: number;
    predictionsMade: number;
}
