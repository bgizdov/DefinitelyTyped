import { FiltersInterface } from "../../../../Global/Interfaces/GlobalInterfaces";
export default class PrivateLeaguePredictionsFilters implements FiltersInterface {
    limit?: number;
    page?: number;
    profileIds?: string[];
    constructor(filters: any);
    constructFiltersUrl?: () => string;
}
