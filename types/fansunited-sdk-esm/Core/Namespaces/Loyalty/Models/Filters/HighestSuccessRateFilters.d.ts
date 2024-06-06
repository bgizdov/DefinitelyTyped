import { FiltersInterface } from "../../../../Global/Interfaces/GlobalInterfaces";
export default class HighestSuccessRateFilters implements FiltersInterface {
    market?: string;
    fromDate?: string;
    toDate?: string;
    usersCount?: number;
    minimumPredictions?: number;
    constructor(filters: any);
    constructFiltersUrl?(): string;
}
