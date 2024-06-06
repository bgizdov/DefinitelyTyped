import { MarketEnum } from "../Enums/MarketEnum";
import BothTeamsFixtureModel from "../Models/Fixtures/Markets/BothTeamsFixtureModel";
import CornersFixtureModel from "../Models/Fixtures/Markets/CornersFixtureModel";
import CorrectScoreFixtureModel from "../Models/Fixtures/Markets/CorrectScoreFixtureModel";
import DoubleChanceFixtureModel from "../Models/Fixtures/Markets/DoubleChanceFixtureModel";
import OneXTwoFixtureModel from "../Models/Fixtures/Markets/OneXTwoFixtureModel";
import HalfTimeFullTimeFixtureModel from "../Models/Fixtures/Markets/HalfTimeFullTimeFixtureModel";
import OverCornersFixtureModel from "../Models/Fixtures/Markets/OverCornersFixtureModel";
import OverGoalsFixtureModel from "../Models/Fixtures/Markets/OverGoalsFixtureModel";
import PenaltyMatchFixtureModel from "../Models/Fixtures/Markets/PenaltyMatchFixtureModel";
import PlayerFixtureModel from "../Models/Fixtures/Markets/PlayerFixtureModel";
import RedCardFixtureModel from "../Models/Fixtures/Markets/RedCardFixtureModel";
import PredictionRequestModel from "../Models/Predictions/PredictionRequestModel";
import { TypeGames } from "../../TopX/types/types";
import TopXPredictionRequestModel from "../../TopX/Models/Prediction/TopXPredictionRequestModel";
import { ErrorHandlingModeType } from "../../../Configurator/Types/ConfiguratorTypes";
export default class PredictorValidator {
    private errorHandlingMode;
    constructor(errorHandlingMode: ErrorHandlingModeType);
    /**
     * Validate all field for game prediction (Top X and Match Quiz). The following cases are covered:
     * 1. Unsupported field is provided (Top X and Match Quiz)
     * 2. Validates tiebreak if is provided (Top X)
     * 3. Validates missing required fields for game request body
     * 4. Validates fixtures
     * @param gameType MATCH_QUIZ, TOP_X and SINGLE. In our case we will use only MATCH_QUIZ and TOP_X.
     * @param param Game request body.
     * @returns Game request body if is valid. If not throws specific message.
     */
    validateBodyFields: (gameType: TypeGames, param: PredictionRequestModel | TopXPredictionRequestModel) => PredictionRequestModel | TopXPredictionRequestModel;
    /**
     * Constructs object types for specific markets. This is done for easier reconstructing when sending the request
     * body to API. Validates the following cases:
     * 1. Market is valid.
     * 2. Prediction is a valid one for the specific market
     * 3. Regex test for CORRECT_SCORE market prediction (String(int:int))
     * 4. Validates playerId except for nobody market (PLAYER_SCORE_FIRST_GOAL)
     * @param matchId Match ID to predict.
     * @param market Market to predict
     * @param prediction The value of prediction.
     * @param playerId Optional. Used only for player markets.
     * @returns Specific type of fixture.
     */
    validateFixture: (matchId: string, market: MarketEnum, prediction: any, playerId?: string) => PlayerFixtureModel | CorrectScoreFixtureModel | OverCornersFixtureModel | OverGoalsFixtureModel | BothTeamsFixtureModel | CornersFixtureModel | DoubleChanceFixtureModel | OneXTwoFixtureModel | HalfTimeFullTimeFixtureModel | PenaltyMatchFixtureModel | RedCardFixtureModel;
    /**
     * Validate fixture fields. Throws exception for the following cases:
     * 1. When invalid field is provided
     * 2. When required field is missing
     * @param fixture Fixture fields to validate.
     */
    private validateFixtureFields;
    /**
     * Validates tiebreaker if provided (Top X). Throws exception for the following cases:
     * 1. If tiebreaker is not an object
     * 2. If the keys in tiebreaker object are incorrect
     * 3. If the required key is missing
     * 4. If the required key is invalid type
     * @param tiebreaker Tiebreaker for Top X prediciton.
     */
    private validateTiebreaker;
    /**
     * Validates prediction in every fixture. Throws for the following cases:
     * 1. When prediction is rather than object type
     * 2. When field 'value' is missing
     * 3. When field rather than 'value' is provided
     * 4. When invalid fields are provided
     * @param market Market of fixture
     * @param prediction Prediction of fixture
     */
    private validatePredictionKey;
    /**
     * Validates player ID for all related player markets EXCEPT PLAYER_SCORE_FIRST_GOAL. The following cases are covered:
     * 1. playerId is falsy value
     * 2. playerId is invalid type
     * @param market Player market.
     * @param playerId Player ID.
     */
    private validatePlayerId;
    /**
     * Validates the market of every fixture. The market should contain in the enumerated list.
     * @param market Market of fixture.
     */
    private validateMarket;
    /**
     * Validates the market for Top X Game.
     */
    private validateMarketTopX;
    /**
     * Used for type check for prediction field in fixture.
     * @param prediction Fixture's prediction
     * @returns True or false.
     */
    private isPredictionBoolean;
    /**
     * Throws exception for invalid prediction for specific market.
     */
    private throwInvalidPredictionException;
    /**
     * Throws exception when provided market is not supported from Fans United.
     */
    private throwInvalidMarketException;
    /**
     * Throws exception for invalid fields.
     */
    private throwInvalidParamException;
    /**
     * Throws exception for missing fields.
     */
    private throwMissingFieldsException;
    /**
     * Throws exception for field invalid type.
     */
    private throwInvalidType;
}
