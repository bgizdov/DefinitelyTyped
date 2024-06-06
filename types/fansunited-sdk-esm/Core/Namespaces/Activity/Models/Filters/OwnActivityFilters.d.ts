import { ActionsEnum } from "../../Enums/ActionsEnum";
import ActivityFilters from "./ActivityFilters";
export default class OwnActivityFilters extends ActivityFilters {
    action?: ActionsEnum;
    constructor(filters: any);
    constructFilterUrl?(): string;
}
