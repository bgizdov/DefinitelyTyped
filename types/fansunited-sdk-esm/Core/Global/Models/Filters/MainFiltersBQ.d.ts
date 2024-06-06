/**
 * Main filter type for API endpoints who use BigQuery and return paginated responses
 */
export default class MainFiltersBQ {
    limit?: number;
    startAfter?: string;
    constructor(filters: any);
    constructMainFiltersUrl?(): string;
}
