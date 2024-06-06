import { IRemapper } from "../../../../../Global/IRemapper";
import MatchBasicModel from "../MatchBasicModel";
export default class MatchBasicRemapper implements IRemapper<MatchBasicModel> {
    private teamRemapper;
    private competitionRemapper;
    private scoresRemapper;
    constructor();
    fromResponse(response: any): MatchBasicModel;
}
