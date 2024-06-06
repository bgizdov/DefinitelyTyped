import { IRemapper } from "../../../../Global/IRemapper";
import SearchModel from "./SearchModel";
export default class SearchRemapper implements IRemapper<SearchModel> {
    private teamRemapper;
    private playerRemapper;
    private competitionremapper;
    constructor();
    fromResponse(response: any): SearchModel;
}
