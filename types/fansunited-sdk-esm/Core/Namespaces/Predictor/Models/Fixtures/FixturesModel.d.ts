import { MarketEnum } from "../../Enums/MarketEnum";
export default interface FixturesModel {
    matchId: string;
    market: MarketEnum;
    prediction: any;
}
