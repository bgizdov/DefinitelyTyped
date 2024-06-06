import MainFiltersBQ from "../../../../Global/Models/Filters/MainFiltersBQ";
export type PostsSortTypes = "OLDEST" | "LATEST" | "INTERACTED" | "POPULAR";
export default class PostsFilters extends MainFiltersBQ {
    skipDeleted?: boolean;
    sort?: PostsSortTypes;
    constructor(filters: any);
    constructMainFiltersUrl?(): string;
}
