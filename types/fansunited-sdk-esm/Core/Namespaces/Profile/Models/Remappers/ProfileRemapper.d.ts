import ProfileModel from "../ProfileModel";
export default class ProfileRemapper {
    profilesFromResponse: (response: any) => ProfileModel[];
    fullProfileFromResponse: (response: any) => ProfileModel;
}
