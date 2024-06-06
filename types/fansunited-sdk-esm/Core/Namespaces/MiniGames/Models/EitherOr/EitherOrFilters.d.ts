import MiniGamesFilters from "../Filters/MiniGamesFilters";
export default class EitherOrFilters extends MiniGamesFilters {
    eitherOrIds?: string[];
    constructor(filters: any);
    constructMainFiltersUrl?(): string;
}
