import CompetitionBasicModel from "../../../Football/Models/Competition/CompetitionBasicModel";
import PlayerBasicModel from "../../../Football/Models/Player/PlayerBasicModel";
import TeamBasicModel from "../../../Football/Models/Team/TeamBasicModel";
export interface EntitiesFollowsBreakdown {
    id: string;
    model: CompetitionBasicModel | TeamBasicModel | PlayerBasicModel;
    count: number;
}
export default class EntitiesFollows {
    count: number;
    breakdown: EntitiesFollowsBreakdown[];
}
