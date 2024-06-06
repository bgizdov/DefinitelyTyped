import { IRemapper } from "../../../../../Global/IRemapper";
import MatchFullModel from "../MatchFullModel";
export default class MatchFullRemapper implements IRemapper<MatchFullModel> {
    private teamMapper;
    private competitionsMapper;
    private lineupsMapper;
    private scoresMapper;
    private statsMapper;
    private timelineMapper;
    constructor();
    fromResponse(response: any): MatchFullModel;
}
