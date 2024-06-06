import { IRemapper } from "../../../../../Global/IRemapper";
import TeamFullModel from "../TeamFullModel";
export default class TeamFullRemapper implements IRemapper<TeamFullModel> {
    private countryRemapper;
    private competitionRemapper;
    private playerRemapper;
    constructor();
    fromResponse(response: any): TeamFullModel;
}
