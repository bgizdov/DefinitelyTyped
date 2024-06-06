import { FiltersInterface } from "../../../../Global/Interfaces/GlobalInterfaces";
export default class TemplateFilters implements FiltersInterface {
    flags?: string;
    status?: string;
    type?: string;
    activeFrom?: string;
    activeTo?: string;
    createdFrom?: string;
    createdTo?: string;
    updatedFrom?: string;
    updatedTo?: string;
    constructor(filters: any);
    constructFiltersUrl?(): string;
}
