export default class PlayerFilters {
    countryId: string;
    scope: string[];
    name: string;
    playerIds: string[];
    limit: number;
    page: number;
    sortField: string;
    sortOrder: string;
    constructor(filters: any);
    constructFilterUrl: () => string;
}
