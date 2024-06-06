import MainFiltersBQ from "../../../../Global/Models/Filters/MainFiltersBQ";
export default class InvitationFilters extends MainFiltersBQ {
    type?: string;
    constructor(filters: any);
    constructMainFiltersUrl?: () => string;
}
