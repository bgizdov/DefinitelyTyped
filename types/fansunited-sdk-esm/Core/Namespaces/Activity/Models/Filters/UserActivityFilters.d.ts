import { UserActionsEnum } from "../../Enums/UserActionsEnum";
import ActivityFilters from "./ActivityFilters";
export default class UserActivityFilters extends ActivityFilters {
    action?: UserActionsEnum;
    constructor(filters: any);
    constructFilterUrl?(): string;
}
