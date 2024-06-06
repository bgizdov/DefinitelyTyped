export default class FollowFilters {
    limit: number;
    startAfter: string;
    constructor(filters: any);
    constructFilterUrl: () => string;
}
