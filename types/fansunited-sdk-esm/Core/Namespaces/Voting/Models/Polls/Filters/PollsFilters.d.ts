import MainFiltersBQ from "../../../../../Global/Models/Filters/MainFiltersBQ";
export default class PollsFilters extends MainFiltersBQ {
    flags?: string[];
    status?: string;
    entityIds?: string[];
    entityType?: string;
    pollIds?: string[];
    sortOrder?: string;
    minVotes?: number;
    constructor(filters: any);
    constructMainFiltersUrl?(): string;
}
