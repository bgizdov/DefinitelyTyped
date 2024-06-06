import { IRemapper } from "../../../../../Global/IRemapper";
import TeamBasicModel from "../TeamBasicModel";
export default class TeamBasicRemapper implements IRemapper<TeamBasicModel> {
    private countryRemapper;
    constructor();
    fromResponse(response: any): TeamBasicModel;
}
