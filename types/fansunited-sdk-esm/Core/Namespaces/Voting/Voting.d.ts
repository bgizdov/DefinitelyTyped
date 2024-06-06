import SDKConfigurationModel from "../../Configurator/Models/SDKConfiguraitonModel";
import MainFiltersBQ from "../../Global/Models/Filters/MainFiltersBQ";
import PollsFilters from "./Models/Polls/Filters/PollsFilters";
export default class Voting {
    private facade;
    constructor(config: SDKConfigurationModel);
    getPolls: (filters?: PollsFilters, disableCache?: boolean) => Promise<import("./Models/Polls/PollsModel").default>;
    getPollById: (pollId: string, disableCache?: boolean) => Promise<import("./Models/Polls/PollFullModel").default>;
    voteForPoll: (pollId: string, optionId: string) => Promise<import("./Models/Polls/PollVoteBasicModel").default>;
    deleteVoteForPoll: (pollId: string) => Promise<boolean>;
    getMyPollVote: (pollId: string, showModels?: boolean) => Promise<import("./Models/Polls/PollVoteFullModel").default>;
    getMyPollsVotes: (filters?: MainFiltersBQ) => Promise<import("./Models/Polls/PollsUserVotesModel").default>;
}
