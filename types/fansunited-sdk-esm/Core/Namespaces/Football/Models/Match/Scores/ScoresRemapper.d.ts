import { IRemapper } from "../../../../../Global/IRemapper";
import ScoresModel from "./ScoresModel";
export default class ScoresRemapper implements IRemapper<ScoresModel> {
    fromResponse(response: any): ScoresModel;
    private statEntityFromResponse;
}
