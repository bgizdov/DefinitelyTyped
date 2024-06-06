import SDKConfigurationModel from "../../Configurator/Models/SDKConfiguraitonModel";
import MatchSummaryModel from "./Models/Summary/MatchSummaryModel";
import { MarketEnum } from "./Enums/MarketEnum";
import PredictionsFilters from "./Models/Predictions/PredictionsFilters";
import PaginationModel from "../../Global/Models/Pagination/PaginationModel";
import { FeaturesConfigModels } from "../../Global/Types/GlobalTypes";
import PredictionResponseModel from "./Models/Predictions/PredictionResponseModel";
export default class Predictor {
    private predictorHttps;
    private clientHttps;
    private predictorFacade;
    private idMapping;
    constructor(config: SDKConfigurationModel);
    makeFootballPrediction: (matchId: string, market: MarketEnum, value: any, playerId?: string) => Promise<PredictionResponseModel>;
    getMatchSummary: (matchId: string, disableCache?: boolean) => Promise<MatchSummaryModel>;
    getMarketSummary: (matchId: string, market: MarketEnum, playerId?: string, disableCache?: boolean) => Promise<any>;
    getConfig: () => Promise<FeaturesConfigModels>;
    deleteFootballPrediction: (predictionId: string) => Promise<boolean>;
    getMyPredictions: (filters?: PredictionsFilters) => Promise<PaginationModel>;
    getMyCurrentPredictions: (filters?: PredictionsFilters) => Promise<PaginationModel>;
    getMyPastPredictions: (filters?: PredictionsFilters) => Promise<PaginationModel>;
    getMyPredictionsForMatches: (matchIds: string[], filters?: PredictionsFilters) => Promise<PaginationModel>;
    getUserPredictions: (userId: string, filters?: PredictionsFilters, disableCache?: boolean) => Promise<PaginationModel>;
    getUserCurrentPredictions: (userId: string, filters?: PredictionsFilters, disableCache?: boolean) => Promise<PaginationModel>;
    getUserPastPredictions: (userId: string, filters?: PredictionsFilters, disableCache?: boolean) => Promise<PaginationModel>;
    getUserPredictionsForMatches: (userId: string, matchIds: string[], filters?: PredictionsFilters, disableCache?: boolean) => Promise<PaginationModel>;
    getPredictionById: (predictionId: string) => Promise<PredictionResponseModel>;
    getPredictionsByIds: (predictionIds: string[]) => Promise<PredictionResponseModel[]>;
}
