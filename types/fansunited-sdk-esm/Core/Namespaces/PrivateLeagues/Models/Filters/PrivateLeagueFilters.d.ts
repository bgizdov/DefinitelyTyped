import { FiltersInterface } from "../../../../Global/Interfaces/GlobalInterfaces";
export default class PrivateLeagueFilters implements FiltersInterface {
    limit?: number;
    page?: number;
    leagueId?: string;
    templateId?: string;
    sortOrder?: string;
    constructor(filters: any);
    constructFiltersUrl?: () => string;
}
