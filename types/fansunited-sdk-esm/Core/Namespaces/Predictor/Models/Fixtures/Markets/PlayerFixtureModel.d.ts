import { MarketEnum } from "../../../Enums/MarketEnum";
import ValueAndPlayerId from "../../Value/ValueAndPlayerId";
import FixturesModel from "../FixturesModel";
export default class PlayerFixtureModel implements FixturesModel {
    matchId: string;
    market: MarketEnum;
    matchType: string;
    prediction: ValueAndPlayerId;
    constructor(matchId: string, market: MarketEnum, value: boolean, playerId: string);
}
