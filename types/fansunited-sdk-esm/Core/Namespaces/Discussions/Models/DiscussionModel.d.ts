import ContextModel from "../../Activity/Models/RequestBody/Context/ContextModel";
export type DiscussionType = "LEAGUE" | "COMMENT_SECTION";
export type ModerationType = "USER" | "STAFF";
export default class DiscussionModel {
    id: string;
    label: string;
    discussionType: DiscussionType;
    moderationType: ModerationType;
    postsCount: number;
    pinnedPosts: string[];
    lastPostId: string;
    context: ContextModel;
    createdAt: string;
    updatedAt: string;
}
