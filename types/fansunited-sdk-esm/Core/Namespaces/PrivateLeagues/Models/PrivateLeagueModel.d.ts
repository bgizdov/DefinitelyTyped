import TemplateModel from "../../Loyalty/Models/Template/TemplateModel";
import PastTemplateModel from "./PastTemplateModel";
export default class PrivateLeagueBasicModel {
    id: string;
    name: string;
    description: string;
    type: string;
    banned: string[];
    invites: string[];
    administrators: string[];
    membersCount: number;
    invitationCode: string;
    templateId: string;
    templateModel: TemplateModel;
    pastTemplates: PastTemplateModel[];
    usersCanInviteUsers: boolean;
    scoringStartsAt: string;
    pinnedPosts: string[];
}
