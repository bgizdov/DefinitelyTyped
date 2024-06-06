import PredictionRequestModel from "./PredictionRequestModel";
import PredictionResponseModel from "./PredictionResponseModel";
import PredictionsModel from "./PredictionsModel";
import SDKConfigurationModel from "../../../../Configurator/Models/SDKConfiguraitonModel";
import IdMappingService from "../../../../IdMapping/IdMappingService";
import TopXPredictionRequestModel from "../../../TopX/Models/Prediction/TopXPredictionRequestModel";
export default class PredictionRemapper {
    private fixturesRemapper;
    private footballHttps;
    private matchFacade;
    private playerFacade;
    private predictorService;
    constructor(config: SDKConfigurationModel, idMapping: IdMappingService);
    remapRequestBody: (prediction: PredictionRequestModel | TopXPredictionRequestModel) => any;
    remapResponseArrayBody: (predictions: any[]) => Promise<PredictionResponseModel[]>;
    remapResponseObjBody: (response: any) => Promise<PredictionResponseModel>;
    remapPredictionModel: (response: any) => PredictionsModel;
}
