import { IRemapper } from "../../../../../Global/IRemapper";
import PlayerFullModel from "../PlayerFullModel";
export default class PlayerFullRemapper implements IRemapper<PlayerFullModel> {
    private countryRemapper;
    private teamRemapper;
    private competitionRemapper;
    constructor();
    fromResponse(response: any): PlayerFullModel;
}
