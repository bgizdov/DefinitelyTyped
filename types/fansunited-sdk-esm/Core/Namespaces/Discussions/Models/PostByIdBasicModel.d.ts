import ReactionModel from "./ReactionModel";
import ReportModel from "./ReportModel";
import VersionsModel from "./VersionsModel";
export default class PostByIdBasicModel {
    id: string;
    userId: string;
    discussionId: string;
    content: string;
    repliesCount: number;
    replyId: string;
    reactions: ReactionModel[];
    reactionsCount: number;
    reports: ReportModel[];
    reportsCount: number;
    versions: VersionsModel[];
    privatePost: boolean;
    deleted: boolean;
    deletedAt: string;
    deletedBy: string;
    moderated: boolean;
    moderatedAt: string;
    moderatedBy: string;
    moderatedReason: string;
    createdAt: string;
    updatedAt: string;
}
