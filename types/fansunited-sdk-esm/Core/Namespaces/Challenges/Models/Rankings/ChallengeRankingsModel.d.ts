import TemplateModel from "../../../Loyalty/Models/Template/TemplateModel";
import PrivateLeagueBasicModel from "../../../PrivateLeagues/Models/PrivateLeagueModel";
export default class ChallengeRankingsModel {
    templateId: string;
    templateModel: TemplateModel;
    challengeId: string;
    challengeModel: PrivateLeagueBasicModel;
    position: string;
    points: number;
    type: string;
}
