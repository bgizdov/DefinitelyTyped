import MainFiltersBQ from "../../../../Global/Models/Filters/MainFiltersBQ";
export type DiscussionsSortTypes = "CREATED_AT_ASC" | "CREATED_AT_DESC" | "POSTS_COUNT_ASC" | "POSTS_COUNT_DESC";
export default class DiscussionsFilters extends MainFiltersBQ {
    discussionIds?: string[];
    label?: string;
    fromDate?: string;
    toDate?: string;
    fromCount?: string;
    toCount?: string;
    sort?: DiscussionsSortTypes;
    constructor(filters: any);
    constructMainFiltersUrl?(): string;
}
