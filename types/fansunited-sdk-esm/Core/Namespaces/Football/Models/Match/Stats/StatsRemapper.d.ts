import { IRemapper } from "../../../../../Global/IRemapper";
import StatsModel from "./StatsModel";
export default class StatsRemapper implements IRemapper<StatsModel> {
    fromResponse(response: any): StatsModel;
    private statEntityFromResponse;
}
