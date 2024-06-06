import MainFiltersBQ from "../../../../Global/Models/Filters/MainFiltersBQ";
export default class PrivateLeaguePostsFilters extends MainFiltersBQ {
    reportsCount?: number;
    constructor(filters: any);
    constructMainFiltersUrl?: () => string;
}
