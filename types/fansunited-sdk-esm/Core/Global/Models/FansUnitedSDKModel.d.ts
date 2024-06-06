import Activity from "../../Namespaces/Activity/Activity";
import Discussions from "../../Namespaces/Discussions/Discussions";
import Challenges from "../../Namespaces/Challenges/Challenges";
import Football from "../../Namespaces/Football/Football";
import Loyalty from "../../Namespaces/Loyalty/Loyalty";
import MatchQuiz from "../../Namespaces/MatchQuiz/MatchQuiz";
import MiniGames from "../../Namespaces/MiniGames/MiniGames";
import Predictor from "../../Namespaces/Predictor/Predictor";
import PrivateLeagues from "../../Namespaces/PrivateLeagues/PrivateLeagues";
import Profile from "../../Namespaces/Profile/Profile";
import TopX from "../../Namespaces/TopX/TopX";
import Progress from "../../Namespaces/Progress/Progress";
import Voting from "../../Namespaces/Voting/Voting";
export default class FansUnitedSDKModel {
    profile: Profile;
    football: Football;
    predictor: Predictor;
    loyalty: Loyalty;
    topX: TopX;
    matchQuiz: MatchQuiz;
    activity: Activity;
    miniGames: MiniGames;
    discussions: Discussions;
    privateLeagues: PrivateLeagues;
    challenges: Challenges;
    progress: Progress;
    voting: Voting;
}
