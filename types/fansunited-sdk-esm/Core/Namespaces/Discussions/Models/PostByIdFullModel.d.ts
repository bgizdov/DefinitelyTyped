import PostByIdBasicModel from "./PostByIdBasicModel";
import ProfileModel from "../../Profile/Models/ProfileModel";
export default class PostByIdFullModel extends PostByIdBasicModel {
    userModel: ProfileModel;
}
