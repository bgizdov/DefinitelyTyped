import { IRemapper } from "../../../../../Global/IRemapper";
import CompetitionBasicModel from "../CompetitionBasicModel";
export default class CompetitionBasicRemapper implements IRemapper<CompetitionBasicModel> {
    private countryRemapper;
    constructor();
    fromResponse(response: any): CompetitionBasicModel;
}
