import CampaignModel from "../../Activity/Models/RequestBody/Context/CampaignModel";
import ContentModel from "../../Activity/Models/RequestBody/Context/ContentModel";
import MiniGamesContextTag from "./MiniGamesContextTag";
export default class MiniGamesContext {
    content: ContentModel;
    tags: MiniGamesContextTag[];
    campaign: CampaignModel;
}
