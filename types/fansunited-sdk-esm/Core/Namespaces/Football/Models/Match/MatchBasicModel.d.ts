import TeamBasicModel from "../Team/TeamBasicModel";
import CompetitionBasicModel from "../Competition/CompetitionBasicModel";
export default class MatchBasicModel {
    id: string;
    kickoffAt: string;
    finishedAt: string;
    updatedAt: string;
    availableMarkets: string[];
    homeTeam: TeamBasicModel;
    awayTeam: TeamBasicModel;
    isDeleted: boolean;
    lineupsConfirmed: boolean;
    startedAt: string;
    minute: string;
    scores: any;
    context: {
        competition: CompetitionBasicModel;
    };
    status: {
        type: string;
        subType: string;
    };
}
