import SDKConfigurationModel from "../../Configurator/Models/SDKConfiguraitonModel";
import { ActionsEnum } from "./Enums/ActionsEnum";
import ActivityResponseBody from "./Models/ActivityResponseBody";
import PaginationActivities from "./Models/PaginationActivities";
import CampaignModel from "./Models/RequestBody/Context/CampaignModel";
import ContentModel from "./Models/RequestBody/Context/ContentModel";
import TagsModel from "./Models/RequestBody/Context/TagsModel";
import UserActivityFilters from "./Models/Filters/UserActivityFilters";
import OwnActivityFilters from "./Models/Filters/OwnActivityFilters";
export default class Activity {
    constructor(config: SDKConfigurationModel);
    add: (action: ActionsEnum, tags: TagsModel[], content?: ContentModel, campaign?: CampaignModel) => Promise<ActivityResponseBody>;
    delete: (activityId: string) => Promise<boolean>;
    like: (tags: TagsModel[], content?: ContentModel, campaign?: CampaignModel) => Promise<ActivityResponseBody>;
    dislike: (tags: TagsModel[], content?: ContentModel, campaign?: CampaignModel) => Promise<ActivityResponseBody>;
    addPageview: (tags: TagsModel[], content?: ContentModel, campaign?: CampaignModel) => Promise<ActivityResponseBody>;
    addContentConsumed: (tags: TagsModel[], content?: ContentModel, campaign?: CampaignModel) => Promise<ActivityResponseBody>;
    addShare: (tags: TagsModel[], content?: ContentModel, campaign?: CampaignModel) => Promise<ActivityResponseBody>;
    addComment: (tags: TagsModel[], content?: ContentModel, campaign?: CampaignModel) => Promise<ActivityResponseBody>;
    addClickAd: (tags: TagsModel[], content?: ContentModel, campaign?: CampaignModel) => Promise<ActivityResponseBody>;
    addConversion: (tags: TagsModel[], content?: ContentModel, campaign?: CampaignModel) => Promise<ActivityResponseBody>;
    getOwn: (filters?: OwnActivityFilters, disableCache?: boolean) => Promise<PaginationActivities>;
    getForUser: (userId: string, filters?: UserActivityFilters, disableCache?: boolean) => Promise<PaginationActivities>;
}
