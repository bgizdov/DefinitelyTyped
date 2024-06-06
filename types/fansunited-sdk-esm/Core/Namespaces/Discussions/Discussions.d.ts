import SDKConfigurationModel from "../../Configurator/Models/SDKConfiguraitonModel";
import CreatePostParamBody from "./Models/CreatePostParamBody";
import DiscussionsFilters from "./Models/Filters/DiscussionsFilters";
import PostsFilters from "./Models/Filters/PostsFilters";
import { ReactionPostType, ReportReasonType } from "./Types/types";
export default class Discussions {
    private facade;
    constructor(config: SDKConfigurationModel);
    getAll: (filters?: DiscussionsFilters, disableCache?: boolean) => Promise<any>;
    getById: (discussionId: string) => Promise<import("./Models/DiscussionModel").default>;
    createPost: (discussionId: string, body: CreatePostParamBody) => Promise<import("./Models/PostByIdBasicModel").default>;
    getPostById: (postId: string) => Promise<import("./Models/PostByIdFullModel").default>;
    updatePost: (postId: string, content: string) => Promise<import("./Models/PostByIdBasicModel").default>;
    deletePost: (postId: string) => Promise<boolean>;
    getPosts: (discussionId: string, filters?: PostsFilters) => Promise<import("./Models/PostsDiscussionBasicModel").default | import("./Models/PostsFullModel").default>;
    getPostReplies: (postId: string, filters?: PostsFilters) => Promise<import("./Models/PostsDiscussionBasicModel").default | import("./Models/PostsFullModel").default>;
    react: (postId: string, reaction: ReactionPostType) => Promise<import("./Models/PostByIdBasicModel").default>;
    reportPost: (postId: string, reason: ReportReasonType, reasonDetails?: string) => Promise<import("./Models/PostByIdBasicModel").default>;
    getOwnPosts: (filters?: PostsFilters) => Promise<import("./Models/PostsModel").default>;
    getUserPosts: (userId: string, filters?: PostsFilters, disableCache?: boolean) => Promise<import("./Models/PostsModel").default>;
    getConfig: () => Promise<import("./Models/ClientFeatures/DiscussionsConfigModel").default>;
}
