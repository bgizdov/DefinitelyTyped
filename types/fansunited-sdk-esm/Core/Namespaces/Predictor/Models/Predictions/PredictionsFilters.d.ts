import { TypeGames } from "../../../TopX/types/types";
import { StatusEnum } from "../../Enums/StatusEnum";
export default class PredictionsFilters {
    limit: number;
    startAfter: string;
    status: StatusEnum[];
    type: TypeGames;
    matchIds: string[];
    gameIds: string[];
    constructor(filters: any);
    constructFiltersUrl: () => string;
}
