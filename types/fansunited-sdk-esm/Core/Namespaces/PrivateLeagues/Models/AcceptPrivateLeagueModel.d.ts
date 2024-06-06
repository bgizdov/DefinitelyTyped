import ProfileModel from "../../Profile/Models/ProfileModel";
import PrivateLeagueBasicModel from "./PrivateLeagueModel";
export default class AcceptPrivateLeagueModel {
    profileId: string;
    profileModel: ProfileModel;
    leagueId: string;
    leagueModel: PrivateLeagueBasicModel;
    message: string;
}
