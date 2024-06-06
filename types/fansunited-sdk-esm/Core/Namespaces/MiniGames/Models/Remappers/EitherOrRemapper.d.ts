import EitherOrFullModel from "../EitherOr/EitherOrFullModel";
import EitherOrsModel from "../EitherOr/EitherOrsModel";
import EitherOrStatsModel from "../EitherOr/EitherOrStatsModel";
import EitherOrParticipationModel from "../EitherOr/Participation/EitherOrParticipationModel";
import EitherOrResultsModel from "../EitherOr/Results/EitherOrResultsModel";
export default class EitherOrRemapper {
    remapEitherOrs: (response: any) => EitherOrsModel;
    remapEitherOrById: (data: any) => EitherOrFullModel;
    remapEitherOrOwnStats: (data: any) => EitherOrStatsModel;
    remapEitherOrResults: (data: any) => EitherOrResultsModel;
    remapEitherOrParticipation: (data: any) => EitherOrParticipationModel;
    private remapBasicEitherOr;
    private remapMetaPagination;
    private remapPoints;
    private remapResultsStandings;
    private remapResultsBreakdown;
    private remapParticipationSteps;
    private remapContext;
}
