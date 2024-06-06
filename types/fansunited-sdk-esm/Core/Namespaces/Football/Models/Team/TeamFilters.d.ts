export default class TeamFilters {
    name: string;
    countryId: string;
    national: boolean;
    gender: string;
    limit: number;
    page: number;
    scope: string[];
    sortField: string;
    sortOrder: string;
    teamIds: string[];
    constructor(filters: any);
    constructFilterUrl: () => string;
}
