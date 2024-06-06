import MiniGamesFilters from "../Filters/MiniGamesFilters";
export default class ClassicQuizFilters extends MiniGamesFilters {
    classicQuizIds?: string[];
    constructor(filters: any);
    constructMainFiltersUrl?(): string;
}
