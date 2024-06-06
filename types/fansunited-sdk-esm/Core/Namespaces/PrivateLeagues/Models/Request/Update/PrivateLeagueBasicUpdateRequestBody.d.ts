export default class PrivateLeagueBasicUpdateRequestBody {
    name: string;
    description: string;
    invitation_code: string;
    template_id: string;
    users_can_invite_users: boolean;
    administrators: string[];
    pinned_posts: string[];
    scoring_starts_at: string;
}
