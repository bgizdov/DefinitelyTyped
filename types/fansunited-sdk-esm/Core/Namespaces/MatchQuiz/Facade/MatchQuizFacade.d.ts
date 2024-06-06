import SDKConfigurationModel from "../../../Configurator/Models/SDKConfiguraitonModel";
import PaginationModel from "../../../Global/Models/Pagination/PaginationModel";
import PredictionRequestModel from "../../Predictor/Models/Predictions/PredictionRequestModel";
import PredictionResponseModel from "../../Predictor/Models/Predictions/PredictionResponseModel";
import PredictionsFilters from "../../Predictor/Models/Predictions/PredictionsFilters";
import { FeaturesConfigModels } from "../../../Global/Types/GlobalTypes";
import GameModel from "../../TopX/Models/Games/GameModel";
import GamesFilters from "../../TopX/Models/Games/GamesFilters";
import GameMarketsResults from "../Models/GameMarketsResults/GameMarketsResults";
import MainFiltersBQ from "../../../Global/Models/Filters/MainFiltersBQ";
import ContestWinners from "../../TopX/Models/Games/Winners/ContestWinners";
import GameByIdModel from "../../TopX/Models/Games/GameByIdModel";
export default class MatchQuizFacade {
    private predictorHttps;
    private predictorService;
    private idMapping;
    private clientHttps;
    private predictorValidator;
    private errorHandlingMode;
    constructor(config: SDKConfigurationModel);
    getConfig: () => Promise<FeaturesConfigModels>;
    play: (matchQuizPrediction: PredictionRequestModel) => Promise<PredictionResponseModel>;
    delete: (gameId: string) => Promise<boolean>;
    getGames: (filters?: GamesFilters, disableCache?: boolean) => Promise<PaginationModel>;
    getGameById: (gameId: string, disableCache?: boolean) => Promise<GameByIdModel>;
    getGamePredictions: (gameId: string, filters?: PredictionsFilters, disableCache?: boolean) => Promise<PaginationModel>;
    getGameResults: (gameId: string, filters?: MainFiltersBQ, disableCache?: boolean) => Promise<PaginationModel>;
    getCurrentGameResults: (disableCache?: boolean) => Promise<GameModel>;
    getMyGameEditions: (filters?: MainFiltersBQ, disableCache?: boolean) => Promise<PaginationModel>;
    getMyGamePrediction: (gameId: string) => Promise<PredictionResponseModel>;
    getUserGameEditions: (userId: string, filters?: MainFiltersBQ, disableCache?: boolean) => Promise<PaginationModel>;
    getUserGamePrediction: (userId: string, gameId: string, disableCache?: boolean) => Promise<PredictionResponseModel>;
    getMarketsResultsForGame: (gameId: string, disableCache?: boolean) => Promise<GameMarketsResults>;
    getGameWinners: (gameId: string, disableCache?: boolean) => Promise<ContestWinners>;
    /**
     * To prevent passing too long URL for fetching data from Predictor API, the maximum limit is set to 50
     */
    private validateLimitFilterOnGames;
}
