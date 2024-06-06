import CampaignModel from "./CampaignModel";
import ContentModel from "./ContentModel";
import TagsModel from "./TagsModel";
export default class ContextModel {
    content?: ContentModel | null;
    tags: TagsModel[];
    campaign?: CampaignModel | null;
}
