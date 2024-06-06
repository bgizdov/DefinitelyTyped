import LoyaltyConfigModel from "../../Namespaces/Loyalty/Models/ClientFeatures/LoyaltyConfigModel";
import MatchQuizConfigModel from "../../Namespaces/MatchQuiz/Models/Config/MatchQuizConfigModel";
import TopXConfigModel from "../../Namespaces/TopX/Models/Config/TopXConfigModel";
import PredictorConfigModel from "../../Namespaces/Predictor/Models/Config/PredictorConfigModel";
import DiscussionsConfigModel from "../../Namespaces/Discussions/Models/ClientFeatures/DiscussionsConfigModel";
export type FeaturesConfigModels = PredictorConfigModel | TopXConfigModel | MatchQuizConfigModel | LoyaltyConfigModel | DiscussionsConfigModel;
export type FilterCase = "user" | "current" | "past" | "matches";
export interface IdEntities {
    competition?: string[];
    team?: string[];
    player?: string[];
    match?: string[];
}
export interface SortOrder {
    value: "asc" | "desc";
}
