import { MarketEnum } from "../../Namespaces/Predictor/Enums/MarketEnum";
export declare enum ErrorMessages {
    INVALID_MATCH_ID = "Match id is invalid!",
    INVALID_PLAYER_ID = "Player id is invalid!",
    QUERY_PARAM_MATCH_IDS_EXCEEDED = "Maximum matchIds in PredictionFilters should be 10 or less.",
    QUERY_PARAM_FILTERS_LIMIT_EXCEEDED = "Maximum limit for filtering games is 50 or less.",
    INVALID_PREDICTION_FIELD = "Prediction field is invalid. For more information please visit our documentation",
    INVALID_TOKEN = "Invalid JWT token is provided",
    EXPIRED_TOKEN = "The provided JWT token is expired",
    ENTITIES_NEEDED = "At least one of footballCompetitions, footballTeams or footballPlayers properties should be provided for filters.",
    ENTITIES_FOLLOWS_FILTERS_EXCEEDED = "Maximum length per entity should be 24 or less.",
    INVALID_TYPE = "You have provided invalid type. The valid type is ",
    INVALID_VALUE = "You have provided invalid value. The valid value is ",
    INVALID_AVATAR = "Invalid URL syntax for avatar image.",
    INVALID_GET_PROFILES_METHOD_CALL = "The method 'getByIds' from Profile namespace is not called correctly. You need to provide 'profileIds' OR 'search' parameters to the method, but you can't use both of them or neither of them.",
    INVALID_LIMIT = "Invalid limit filter. The maximum limit is 20",
    FILTER_COMBINATION_ERROR = "You need to use both 'entityIds' and 'entityType' filters together",
    INVALID_ENTITY_TYPE = "Invalid 'entityType' filter. Please use one of the following valid options: competition, team, or player",
    INVALID_TEMPLATE_GROUP_ID = "There is no group in this template with the provided groupId",
    INVALID_TEMPLATE_GROUP_FILTERS = "The provided template group has no filters",
    INVALID_PAGE_NUMBER = "Invalid page number provided. Use number between 1 and max number of pages."
}
export declare const WarningMessages: {
    UNEXPECTED_STATUS_PROP: string;
    UNEXPECTED_TYPE_PROP: string;
};
export declare const invalidPredictionMessage: (prediction: string, market: MarketEnum) => string;
export declare const invalidMarketMessage: (market: string) => string;
export declare const invalidMarketTopXMessage: (market: string) => string;
export declare const invalidFieldMessage: (fields: string[]) => string;
export declare const missingFieldsMessage: (field: string, missingFields: string[]) => string;
export declare const invalidTypeMessage: (field: string, correctType: string) => string;
