import { ActionsEnum } from "../../Enums/ActionsEnum";
import CampaignModel from "./Context/CampaignModel";
import ContentModel from "./Context/ContentModel";
import ContextModel from "./Context/ContextModel";
import TagsModel from "./Context/TagsModel";
export default class CreateActivityRequestBody {
    action: ActionsEnum;
    context: ContextModel;
    constructor(action: ActionsEnum, tags: TagsModel[], content?: ContentModel, campaign?: CampaignModel);
}
