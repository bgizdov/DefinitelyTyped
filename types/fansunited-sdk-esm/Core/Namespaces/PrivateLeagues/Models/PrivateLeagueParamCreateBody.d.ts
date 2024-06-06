export default class PrivateLeagueParamCreateBody {
    name: string;
    description: string;
    invitationCode: string;
    templateId: string;
    usersCanInviteUsers: boolean;
    administrators?: string[];
    scoringStartsAt?: string;
}
