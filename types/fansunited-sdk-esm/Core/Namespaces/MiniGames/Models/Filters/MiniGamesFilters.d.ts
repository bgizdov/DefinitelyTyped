import MainFiltersBQ from "../../../../Global/Models/Filters/MainFiltersBQ";
export default class MiniGamesFilters extends MainFiltersBQ {
    flags?: string[];
    status?: string;
    entityIds?: string[];
    entityType?: string;
    sort?: string;
    groupByStatus?: boolean;
    constructor(filters: any);
    constructMainFiltersUrl?(): string;
}
