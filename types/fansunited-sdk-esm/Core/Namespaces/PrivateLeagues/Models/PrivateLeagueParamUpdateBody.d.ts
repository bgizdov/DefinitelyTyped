export default class PrivateLeagueParamUpdateBody {
    name: string;
    description: string;
    invitationCode: string;
    templateId: string;
    usersCanInviteUsers: boolean;
    administrators: string[];
    pinnedPosts: string[];
    scoringStartsAt: string;
}
