import ProfileCountryModel from "./ProfileCountryModel";
import InterestModel from "./InterestModel";
export default class ProfileModel {
    id: string;
    name: string;
    nickname: string;
    avatar: string;
    gender: string;
    country: ProfileCountryModel;
    birthDate: string;
    interests: InterestModel[];
    followingCount: number;
    followersCount: number;
}
