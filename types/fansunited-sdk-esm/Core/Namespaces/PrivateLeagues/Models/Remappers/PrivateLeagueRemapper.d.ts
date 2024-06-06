import AcceptChallengeModel from "../../../Challenges/Models/AcceptChallengeModel";
import AcceptPrivateLeagueModel from "../AcceptPrivateLeagueModel";
import PrivateLeagueFullModel from "../PrivateLeagueFullModel";
import PrivateLeagueBasicModel from "../PrivateLeagueModel";
import PrivateLeaguePredictionsModel from "../PrivateLeaguePredictionsModel";
export default class PrivateLeagueRemapper {
    remapToPrivateLeagues: (response: any) => any;
    private remapMetaPrivateLeagues;
    remapToPrivateLeagueById: (response: any) => PrivateLeagueFullModel;
    remapToMyPrivateLeagues: (response: any) => PrivateLeagueBasicModel;
    remapToAcceptPrivateLeague: (response: any) => AcceptPrivateLeagueModel;
    remapToAcceptChallenge: (response: any) => AcceptChallengeModel;
    remapPredictions: (response: any) => PrivateLeaguePredictionsModel;
    private remapMeta;
    private remapPredictionsData;
}
