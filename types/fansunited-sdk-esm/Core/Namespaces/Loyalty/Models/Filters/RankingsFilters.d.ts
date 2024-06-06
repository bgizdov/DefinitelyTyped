import { FiltersInterface } from "../../../../Global/Interfaces/GlobalInterfaces";
import { SortOrder } from "../../../../Global/Types/GlobalTypes";
import { GameType, RankingsType } from "../../Types/LoyaltyTypes";
import LoyaltyFilters from "./LoyaltyFilters";
export default class RankingsFilters extends LoyaltyFilters implements FiltersInterface {
    sortOrder?: SortOrder;
    rankType?: RankingsType;
    leaderboardIds?: string[];
    gameType?: GameType;
    constructor(filters: any);
    constructFiltersUrl: () => string;
}
