import TeamBasicModel from "../Team/TeamBasicModel";
import StatsModel from "./Stats/StatsModel";
import LineupsModel from "./Lineups/LineupsModel";
import CompetitionBasicModel from "../Competition/CompetitionBasicModel";
import ScoresModel from "./Scores/ScoresModel";
import TimelineModel from "./Timeline/TimelineModel";
import MatchStatus from "./Status/MatchStatus";
export default class MatchFullModel {
    id: string;
    kickoffAt: string;
    finishedAt: string;
    updatedAt: string;
    availableMarkets: string[];
    isDeleted: boolean;
    homeTeam: TeamBasicModel;
    awayTeam: TeamBasicModel;
    lineupsConfirmed: boolean;
    startedAt: string;
    minute: string;
    scores: ScoresModel;
    stats: StatsModel;
    context: {
        competition: CompetitionBasicModel;
    };
    timeline: TimelineModel[];
    status: MatchStatus;
    lineups: LineupsModel;
}
