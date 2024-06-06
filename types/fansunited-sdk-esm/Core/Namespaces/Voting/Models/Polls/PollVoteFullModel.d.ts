import PollBasicModel from "./PollBasicModel";
import PollOptionModel from "./PollOptionModel";
import PollVoteBasicModel from "./PollVoteBasicModel";
export default class PollVoteFullModel extends PollVoteBasicModel {
    pollModel: PollBasicModel;
    optionModel: PollOptionModel;
}
