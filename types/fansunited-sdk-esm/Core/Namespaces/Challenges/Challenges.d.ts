import SDKConfigurationModel from "../../Configurator/Models/SDKConfiguraitonModel";
import InvitationFilters from "../PrivateLeagues/Models/Filters/InvitationFilters";
import PrivateLeaguePostsFilters from "../PrivateLeagues/Models/Filters/PrivateLeaguePostsFilters";
import PrivateLeaguePredictionsFilters from "../PrivateLeagues/Models/Filters/PrivateLeaguePredictionsFilters";
import PrivateLeagueParamCreateBody from "../PrivateLeagues/Models/PrivateLeagueParamCreateBody";
import PrivateLeagueParamUpdateBody from "../PrivateLeagues/Models/PrivateLeagueParamUpdateBody";
import ChallengeFilters from "./Models/Filters/ChallengeFilters";
import MyChallengesFilters from "./Models/Filters/MyChallengesFilters";
export default class Challenges {
    private facade;
    constructor(config: SDKConfigurationModel);
    issue: (body: PrivateLeagueParamCreateBody, userId: string) => Promise<import("../PrivateLeagues/Models/PrivateLeagueFullModel").default>;
    update: (challengeId: string, body: PrivateLeagueParamUpdateBody) => Promise<import("../PrivateLeagues/Models/PrivateLeagueFullModel").default>;
    updateTemplate: (challengeId: string, newTemplateId: string, oldTemplateName: string) => Promise<import("../PrivateLeagues/Models/PrivateLeagueFullModel").default>;
    delete: (challengeId: string) => Promise<boolean>;
    getById: (challengeId: string, disableCache?: boolean) => Promise<import("../PrivateLeagues/Models/PrivateLeagueFullModel").default>;
    getMyChallenges: (filters?: MyChallengesFilters) => Promise<any>;
    accept: (challengeId: string) => Promise<import("./Models/AcceptChallengeModel").default>;
    reject: (challengeId: string) => Promise<import("./Models/AcceptChallengeModel").default>;
    leave: (challengeId: string) => Promise<string[]>;
    getMyChallengesStandings: (filters?: ChallengeFilters) => Promise<any>;
    getInvitations: (filters?: InvitationFilters) => Promise<import("../PrivateLeagues/Models/PrivateLeaguesModel").default>;
    getReportedPosts: (challengeId: string, filters?: PrivateLeaguePostsFilters) => Promise<import("../Discussions/Models/PostsDiscussionBasicModel").default | import("../Discussions/Models/PostsFullModel").default>;
    getPredictions: (challengeId: string, filters?: PrivateLeaguePredictionsFilters) => Promise<import("../PrivateLeagues/Models/PrivateLeaguePredictionsModel").default>;
    moderatePost: (postId: string, moderationReason: string) => Promise<import("../Discussions/Models/PostByIdBasicModel").default>;
}
