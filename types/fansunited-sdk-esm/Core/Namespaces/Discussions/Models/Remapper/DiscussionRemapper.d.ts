import DiscussionModel from "../DiscussionModel";
import PostsMetaModel from "../PostsMetaModel";
import PostByIdBasicModel from "../PostByIdBasicModel";
import PostsDiscussionBasicModel from "../PostsDiscussionBasicModel";
import PostByIdFullModel from "../PostByIdFullModel";
import PostsFullModel from "../PostsFullModel";
import PostsModel from "../PostsModel";
export default class DiscussionRemapper {
    remapToDiscussions: (response: any) => any;
    remapToDiscussionById: (response: any) => DiscussionModel;
    remapToPostsForDiscussion: (response: any, typeModel: "basic" | "full") => PostsDiscussionBasicModel | PostsFullModel;
    remapToPosts: (response: any) => PostsModel;
    remapToPostMeta: (meta: any) => PostsMetaModel;
    private remapToMeta;
    remapToPostByIdBasic: (response: any) => PostByIdBasicModel;
    remapToPostByIdFull: (response: any) => PostByIdFullModel;
    private remapReactionsPost;
    private remapVersionsPost;
    private remapReportPost;
}
