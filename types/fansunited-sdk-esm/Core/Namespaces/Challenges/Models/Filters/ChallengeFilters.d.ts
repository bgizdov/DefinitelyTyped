import { FiltersInterface } from "../../../../Global/Interfaces/GlobalInterfaces";
export default class ChallengeFilters implements FiltersInterface {
    limit?: number;
    page?: number;
    challengeId?: string;
    templateId?: string;
    sortOrder?: string;
    constructor(filters: any);
    constructFiltersUrl?: () => string;
}
