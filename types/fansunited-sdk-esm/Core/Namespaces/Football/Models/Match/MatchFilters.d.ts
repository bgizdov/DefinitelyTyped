export default class MatchFilters {
    countryIds?: string[];
    competitionIds?: string[];
    matchIds?: string[];
    status?: string;
    teamIds?: string[];
    fromDate?: string;
    toDate?: string;
    limit?: number;
    page?: number;
    sortField?: string;
    sortOrder?: string;
    constructor(filters: any);
    constructFilterUrl?: (avoidPagination?: boolean) => string;
}
