import TemplateModel from "../../../Loyalty/Models/Template/TemplateModel";
import PrivateLeagueBasicModel from "../PrivateLeagueModel";
export default class PrivateLeagueRankingsModel {
    templateId: string;
    templateModel: TemplateModel;
    privateLeagueId: string;
    privateLeagueModel: PrivateLeagueBasicModel;
    position: string;
    points: number;
    type: string;
}
