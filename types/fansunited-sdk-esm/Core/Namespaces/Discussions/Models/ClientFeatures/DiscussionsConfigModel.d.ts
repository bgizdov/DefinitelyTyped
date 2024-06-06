import AutomaticModerationModel from "./AutomaticModerationModel";
export default class DiscussionsConfigModel {
    enabled: boolean;
    clientId: string;
    automaticModeration: AutomaticModerationModel;
}
