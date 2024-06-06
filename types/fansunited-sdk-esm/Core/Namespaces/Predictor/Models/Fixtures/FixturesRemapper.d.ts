import FixturesResponseModel from "./FixturesResponseModel";
import ResultModel from "./ResultModel";
import MatchFacade from "../../../Football/Facades/MatchFacade";
import PlayerFacade from "../../../Football/Facades/PlayerFacade";
import PredictorService from "../../Service/PredictorService";
export default class FixturesRemapper {
    private matchFacade;
    private playerFacade;
    private predictorService;
    constructor(matchFacade: MatchFacade, playerFacade: PlayerFacade, predictorService: PredictorService);
    /**
     * All models have property value and API expects to be prediction.
     * - For markets linked with players request body has player_id property.
     * - For markets OVER_GOALS and OVER_CORNERS the target is included in property market. Example: (OVER_GOALS_0.5).
     * The market is split by "_" and last index is passed to property target.
     * - For CORRECT_SCORE market value in model is "int:int" and API expects goals_home:int, goals_away:int. The string is split by ":".
     * First index is goals_home and second index is goals_away.
     * @param fixture
     * @returns Remmaped fixture request body.
     */
    remapFixturesRequest: (fixture: any) => any;
    /**
     * Remap each fixture from response body API. The steps are:
     * - Sort the array in ascending order (for TOP_X or MATCH_QUIZ)
     * - Make request to GET /matches endpoint in Football API with all match ids
     * - Make request to GET /players endpoint in Football API only when we have property player_id from response body.
     * - Remap properties to camel case.
     * @param responses
     * @returns Remmaped fixture response body.
     */
    remapFixturesResponse: (responses: any[]) => Promise<FixturesResponseModel[]>;
    remapResult: (result: any) => ResultModel;
}
