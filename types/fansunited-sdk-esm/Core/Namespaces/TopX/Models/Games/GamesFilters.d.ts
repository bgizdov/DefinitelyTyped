import MainFiltersBQ from "../../../../Global/Models/Filters/MainFiltersBQ";
import { SortOrder } from "../../../../Global/Types/GlobalTypes";
import { GameStatusEnum } from "../../Enums/GameStatusEnum";
import { TypeGames } from "../../types/types";
export default class GamesFilters extends MainFiltersBQ {
    status: GameStatusEnum;
    type: TypeGames;
    gameIds: string[];
    sortOrder: SortOrder;
    constructor(filters: any);
    constructFiltersUrl: () => string;
}
