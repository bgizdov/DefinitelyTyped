import { MarketEnum } from "../Enums/MarketEnum";
import ClientHttps from "../../../Https/ClientHttps";
import PredictorHttps from "../../../Https/PredictorHttps";
import IdMappingService from "../../../IdMapping/IdMappingService";
import MatchSummaryModel from "../Models/Summary/MatchSummaryModel";
import PredictorService from "../Service/PredictorService";
import PredictionsFilters from "../Models/Predictions/PredictionsFilters";
import SDKConfigurationModel from "../../../Configurator/Models/SDKConfiguraitonModel";
import PaginationModel from "../../../Global/Models/Pagination/PaginationModel";
import { FeaturesConfigModels } from "../../../Global/Types/GlobalTypes";
import PredictionResponseModel from "../Models/Predictions/PredictionResponseModel";
export default class PredictorFacade {
    readonly predictorHttps: PredictorHttps;
    readonly clientHttps: ClientHttps;
    readonly idMapping: IdMappingService;
    readonly predictorService: PredictorService;
    private predictorValidator;
    private errorHandlingMode;
    constructor(config: SDKConfigurationModel, predictorHttps: PredictorHttps, clientHttps: ClientHttps, idMapping: IdMappingService);
    /**
    * Exposing PredictorService for two operations:
    * 1.Validation of fixture - returns correct model.
    * 2.Perform id mapping for matchId and playerId in request body.
    * @param fixture
    * @returns Fixture response from Prediction API. Ids are remapped if idSchema is different from native.
    */
    makeFootballPrediction: (matchId: string, market: MarketEnum, value: any, playerId?: string) => Promise<PredictionResponseModel>;
    /**
     * Using PredictorService to perform id mapping for matchId in request body. The response body contains all markets in property predictions.
     * In case there is prediction with player market, it property's name is the player id itself so it will be remaped to idSchema.
     * @param matchId
     * @param disableCache
     * @returns Match summary with all predictions for it. Ids are remapped if idSchema is different from native.
     */
    getMatchSummary: (matchId: string, disableCache: boolean) => Promise<MatchSummaryModel>;
    getMarketSummary: (matchId: string, market: MarketEnum, playerId?: string, disableCache?: boolean) => Promise<any>;
    private getMatchSummaryBase;
    getConfig: () => Promise<FeaturesConfigModels>;
    deleteFootballPrediction: (predictionId: string) => Promise<boolean>;
    getMyPredictions: (filters?: PredictionsFilters) => Promise<PaginationModel>;
    getMyPredictionsForMatches: (matchIds: string[], filters: PredictionsFilters) => Promise<PaginationModel>;
    getMyCurrentPredictions: (filters?: PredictionsFilters) => Promise<PaginationModel>;
    getMyPastPredictions: (filters?: PredictionsFilters) => Promise<PaginationModel>;
    getUserPredictions: (userId: string, filters?: PredictionsFilters, disableCache?: boolean) => Promise<PaginationModel>;
    getUserCurrentPredictions: (userId: string, filters?: PredictionsFilters, disableCache?: boolean) => Promise<PaginationModel>;
    getUserPastPredictions: (userId: string, filters?: PredictionsFilters, disableCache?: boolean) => Promise<PaginationModel>;
    getUserPredictionsForMatches: (userId: string, matchIds: string[], filters?: PredictionsFilters, disableCache?: boolean) => Promise<PaginationModel>;
    getPredictionById: (predictionId: string) => Promise<PredictionResponseModel>;
    getPredictionsByIds: (predictionIds: string[]) => Promise<PredictionResponseModel[]>;
}
