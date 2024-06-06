import { IRemapper } from "../../../../../Global/IRemapper";
import TopPlayerModel from "../TopPlayerModel";
export default class TopPlayerRemapper implements IRemapper<TopPlayerModel> {
    private countryRemapper;
    constructor();
    fromResponse(response: any): TopPlayerModel;
}
