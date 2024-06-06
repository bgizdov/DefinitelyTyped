import { MarketEnum } from "../Enums/MarketEnum";
import IdMappingService from "../../../IdMapping/IdMappingService";
import PredictionsModel from "../Models/Predictions/PredictionsModel";
import SDKConfigurationModel from "../../../Configurator/Models/SDKConfiguraitonModel";
import PredictionsFilters from "../Models/Predictions/PredictionsFilters";
import { TypeGames } from "../../TopX/types/types";
import GamesFilters from "../../TopX/Models/Games/GamesFilters";
import PaginationModel from "../../../Global/Models/Pagination/PaginationModel";
import { FeaturesConfigModels, FilterCase } from "../../../Global/Types/GlobalTypes";
import GameMarketsResults from "../../MatchQuiz/Models/GameMarketsResults/GameMarketsResults";
import MatchSummaryModel from "../Models/Summary/MatchSummaryModel";
import MainFiltersBQ from "../../../Global/Models/Filters/MainFiltersBQ";
import ContestWinners from "../../TopX/Models/Games/Winners/ContestWinners";
export default class PredictorService {
    private footballHttps;
    private idMapping;
    private matchFacade;
    private playerFacade;
    private profileNamespace;
    constructor(config: SDKConfigurationModel, idMapping: IdMappingService);
    remapMatchIdToNative: (matchIds: string[]) => Promise<string[]>;
    remapPlayerIdToNative: (playerIds: string[]) => Promise<any>;
    remapPlayerIdMapToNative: (playerIds: string[]) => Promise<any>;
    /**
     * In case there is prediction with player market, it property's name is the player id itself so it will be remaped to idSchema.
     * @param predictions
     * @returns Predictions with remapped ids.
     */
    remapPlayerIdToIdSchema: (predictions: PredictionsModel) => Promise<PredictionsModel>;
    /**
     * Convert market from API request response to market in MarketEnums
     * @param market
     * @returns Market that fits response model
     */
    convertMarketForResponseModel: (market: any, target: number) => string;
    getMarketSummary: (matchSummary: MatchSummaryModel, market: MarketEnum, playerId?: string) => Promise<any>;
    remapCompetitionsFromConfig: (config: FeaturesConfigModels) => Promise<FeaturesConfigModels>;
    /**
    * Verifying parameter games for array or object type.
    * @param games
    * @returns Games/game with remapped matchIds in fixtures/results property.
    */
    remapMatchIdsFixtures: (games: any) => Promise<any>;
    /**
     * Making one request to GET /matches with all match ids for all fixtures or results.
     * @param games
     * @returns Games with remapped matchIds in fixtures or results property.
     */
    private refactorResponseArrModel;
    /**
     * Making one request to GET /matches with all match ids for all fixtures
     * @param games
     * @returns Specific game with remapped matchIds in fixtures property.
     */
    private refactorResponseObjModel;
    /**
     * Function receives list of all open games. When they are more than one it gets sorted by predictionsCutoff property.
     * @param openGames
     * @returns Id of the first game in the list.
     */
    getCurrentGameId: (openGames: PaginationModel) => string;
    initGameTypePredictions: (gameType: TypeGames, providedFilters?: MainFiltersBQ) => PredictionsFilters;
    initGameFilters: (gameType: TypeGames, filters?: GamesFilters, gameIds?: string[]) => GamesFilters;
    addPredictionProp: (predictions: any, paginatedGames: PaginationModel) => Promise<any>;
    private remapResult;
    /**
     * Checks whether the length of array is more than the declared limit.
     * @param ids String array for which length is limited.
     * @returns True/false result from ternary operator.
     */
    areIdsExceeded: (ids: string[]) => boolean;
    initPredictionsFilters: (filters: PredictionsFilters, filtersFor: FilterCase, matchIds?: string[]) => PredictionsFilters;
    completeGameMarketResults: (gameMarketResults: GameMarketsResults, gameType: TypeGames) => Promise<GameMarketsResults>;
    completeContestWinners: (contestWinners: ContestWinners) => Promise<ContestWinners>;
    /**
     * Assigns match model for the specific fixture. When no model is available, null value will be assign to matchModel property.
     * @param matchesMap Matches map returned from Football API
     * @param fixture Fixtures to remap
     */
    private handleMatchModel;
    /**
     * Remaps match id for market result response. When no match model is available make additional request to get the desired provider id.
     * @param matchModelMap Matches map returned from Football API
     * @param value Results for market
     */
    private remapMatchIdForResultsMarkets;
    private deleteUnexpectedProperties;
}
