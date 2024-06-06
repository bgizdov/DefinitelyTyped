import CompetitionBasicModel from "./CompetitionBasicModel";
export default class CompetitionFilters {
    countryId: string;
    name: string;
    gender: string;
    type: string;
    sortField: string;
    sortOrder: string;
    competitionIds: string[];
    constructor(filters: any);
    constructFilterUrl: () => string;
    competitionSearchFilter: (competitions: CompetitionBasicModel[]) => any[];
    private filter;
    private entitiesToSearchWith;
    private sort;
}
