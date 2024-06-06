import ActionsModel from "../Actions/ActionsModel";
import RewardsModel from "../Rewards/RewardsModel";
export default class LoyaltyConfigModel {
    enabled: boolean;
    clientId: string;
    conditions: {
        list: string[];
    };
    actions: ActionsModel;
    rewards: RewardsModel;
}
