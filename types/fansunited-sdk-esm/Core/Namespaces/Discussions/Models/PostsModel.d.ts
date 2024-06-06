import MetaModel from "../../../Global/Models/Pagination/MetaModel";
import PostByIdBasicModel from "./PostByIdBasicModel";
export default class PostsModel {
    meta: MetaModel;
    data: PostByIdBasicModel[];
}
