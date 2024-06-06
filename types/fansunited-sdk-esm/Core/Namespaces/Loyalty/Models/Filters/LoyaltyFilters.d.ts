import { FiltersInterface } from "../../../../Global/Interfaces/GlobalInterfaces";
export default class LoyaltyFilters implements FiltersInterface {
    limit?: number;
    page?: number;
    constructor(filters: any);
    constructFiltersUrl?(): string;
}
