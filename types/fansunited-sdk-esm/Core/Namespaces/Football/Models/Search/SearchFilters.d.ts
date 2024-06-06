export default class SearchFilters {
    entities: string[];
    query: string;
    scope: string[];
    constructor(filters: any);
    constructFilterUrl: () => string;
}
