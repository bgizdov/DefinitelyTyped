import AchievementsStats from "./AchievementsStats";
import DiscussionStats from "./DiscussionStats";
import PredictionsStats from "./PredictionsStats";
import SuccessRates from "./SuccessRates";
export default class ProfileStatsModel {
    profileId: string;
    tier: string;
    points: number;
    predictionsMade: number;
    successRates: SuccessRates;
    predictions: PredictionsStats;
    tiers: AchievementsStats[];
    badges: AchievementsStats[];
    discussions: DiscussionStats;
}
