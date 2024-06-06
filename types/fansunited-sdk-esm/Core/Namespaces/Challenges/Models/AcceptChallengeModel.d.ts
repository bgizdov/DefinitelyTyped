import PrivateLeagueBasicModel from "../../PrivateLeagues/Models/PrivateLeagueModel";
import ProfileModel from "../../Profile/Models/ProfileModel";
export default class AcceptChallengeModel {
    profileId: string;
    profileModel: ProfileModel;
    challengeId: string;
    challengeModel: PrivateLeagueBasicModel;
    message: string;
}
