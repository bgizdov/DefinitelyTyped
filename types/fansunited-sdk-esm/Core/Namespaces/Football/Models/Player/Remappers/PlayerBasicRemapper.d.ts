import { IRemapper } from "../../../../../Global/IRemapper";
import PlayerBasicModel from "../PlayerBasicModel";
export default class PlayerBasicRemapper implements IRemapper<PlayerBasicModel> {
    private countryRemapper;
    private teamRemapper;
    constructor();
    fromResponse(response: any): PlayerBasicModel;
}
