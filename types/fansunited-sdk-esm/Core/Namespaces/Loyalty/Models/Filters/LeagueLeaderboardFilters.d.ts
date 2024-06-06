import LoyaltyFilters from "./LoyaltyFilters";
export default class LeagueLeaderboardFilters extends LoyaltyFilters {
    templateId?: string;
    constructor(filters: any);
    constructFiltersUrl?(): string;
}
