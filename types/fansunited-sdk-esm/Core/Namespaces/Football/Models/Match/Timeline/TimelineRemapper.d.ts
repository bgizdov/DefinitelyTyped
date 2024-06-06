import { IRemapper } from "../../../../../Global/IRemapper";
import TimelineModel from "./TimelineModel";
export default class TimelineRemapper implements IRemapper<TimelineModel> {
    private playerRemapper;
    constructor();
    fromResponse(response: any): TimelineModel;
}
