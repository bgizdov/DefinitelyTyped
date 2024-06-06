import { IRemapper } from "../../../../../Global/IRemapper";
import CompetitionFullModel from "../CompetitionFullModel";
export default class CompetitionFullRemapper implements IRemapper<CompetitionFullModel> {
    private countryRemapper;
    private teamBasicRemapper;
    constructor();
    fromResponse(response: any): CompetitionFullModel;
}
