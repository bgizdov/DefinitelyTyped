import SuccessRatePercent from "./SuccessRatePercent";
export default class SuccessRates {
    overallPercent: number;
    byFootballCompetition: Record<string, SuccessRatePercent>;
    byFootballTeam: Record<string, SuccessRatePercent>;
    byFootballMarket: Record<string, SuccessRatePercent>;
}
