import MarketsConfigModel from "./MarketsConfigModel";
import SuccessRateScopeModel from "./SuccessRateScopeModel";
import UserDataConfigModel from "./UserDataConfigModel";
export default class PredictorConfigModel {
    enabled: boolean;
    clientId: string;
    fullCoverageCompetitions: string[];
    markets: MarketsConfigModel;
    successRateScopes: SuccessRateScopeModel;
    userDataConfig: UserDataConfigModel;
}
