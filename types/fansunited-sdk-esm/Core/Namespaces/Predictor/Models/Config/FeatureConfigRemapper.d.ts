import DiscussionsConfigModel from "../../../Discussions/Models/ClientFeatures/DiscussionsConfigModel";
import LoyaltyConfigModel from "../../../Loyalty/Models/ClientFeatures/LoyaltyConfigModel";
import MatchQuizConfigModel from "../../../MatchQuiz/Models/Config/MatchQuizConfigModel";
import TopXConfigModel from "../../../TopX/Models/Config/TopXConfigModel";
import PredictorConfigModel from "./PredictorConfigModel";
export default class FeatureConfigRemapper {
    remapPredictorConfig: (response: any) => PredictorConfigModel;
    remapTopXConfig: (response: any) => TopXConfigModel;
    remapMatchQuizConfig: (response: any) => MatchQuizConfigModel;
    remapLoyaltyConfig: (response: any) => LoyaltyConfigModel;
    remapDiscussionsConfig: (response: any) => DiscussionsConfigModel;
    private remapAutomaticModeration;
    private remapRewards;
    private remapPoints;
    private remapBadges;
    private remapBadgeValues;
    private remapRequirements;
    private remapUserDataConfig;
    private remapGeneralBadgeValues;
    private remapGeneralRequirements;
}
