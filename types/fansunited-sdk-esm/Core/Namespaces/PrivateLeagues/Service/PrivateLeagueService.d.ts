import SDKConfigurationModel from "../../../Configurator/Models/SDKConfiguraitonModel";
import AcceptChallengeModel from "../../Challenges/Models/AcceptChallengeModel";
import AcceptPrivateLeagueModel from "../Models/AcceptPrivateLeagueModel";
import PrivateLeagueBasicModel from "../Models/PrivateLeagueModel";
import { LeagueType } from "../Types/types";
import PrivateLeaguePredictionsModel from "../Models/PrivateLeaguePredictionsModel";
import PrivateLeagueFullModel from "../Models/PrivateLeagueFullModel";
export default class PrivateLeagueService {
    private loyalty;
    private profile;
    private predictor;
    constructor(config: SDKConfigurationModel);
    setTemplateModels: (privateLeague: PrivateLeagueFullModel) => Promise<void>;
    setTemplateModelsInLeagues: (privateLeagues: PrivateLeagueBasicModel[]) => Promise<void>;
    setTemplateModelsFromLeagueModels: (rankings: any[], type: LeagueType) => void;
    setProfileModel: (acceptResponse: AcceptPrivateLeagueModel | AcceptChallengeModel) => Promise<void>;
    setModelsForPredictions: (predictions: PrivateLeaguePredictionsModel) => Promise<PrivateLeaguePredictionsModel>;
    private getProfileModels;
    private getPredictionModels;
}
