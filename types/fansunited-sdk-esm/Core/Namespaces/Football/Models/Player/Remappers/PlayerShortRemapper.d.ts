import { IRemapper } from "../../../../../Global/IRemapper";
import PlayerShortModel from "../PlayerShortModel";
export default class PlayerShortRemapper implements IRemapper<PlayerShortModel> {
    fromResponse(response: any): PlayerShortModel;
}
