import FootballPaginationModel from "../../../Football/Models/Pagination/FootballPaginationModel";
export default class RankingsRemapper {
    remapRankings: (response: any) => FootballPaginationModel;
    remapRankingsPrivateLeague: (response: any) => FootballPaginationModel;
    remapRankingsChallenge: (response: any) => FootballPaginationModel;
    private remapMeta;
    private remapData;
    private remapDataUserRankingPrivateLeague;
    private remapDataUserRankingChallenge;
}
