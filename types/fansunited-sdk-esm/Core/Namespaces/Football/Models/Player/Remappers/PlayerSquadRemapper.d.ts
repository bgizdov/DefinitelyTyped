import { IRemapper } from "../../../../../Global/IRemapper";
import PlayerSquadModel from "../PlayerSquadModel";
export default class PlayerBasicRemapper implements IRemapper<PlayerSquadModel> {
    private countryRemapper;
    constructor();
    fromResponse(response: any): PlayerSquadModel;
}
