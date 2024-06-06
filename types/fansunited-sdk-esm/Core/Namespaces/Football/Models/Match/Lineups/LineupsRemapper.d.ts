import { IRemapper } from "../../../../../Global/IRemapper";
import LineupsModel from "./LineupsModel";
export default class LineupsRemapper implements IRemapper<LineupsModel> {
    private playerRemapper;
    constructor();
    fromResponse(response: any): LineupsModel;
}
