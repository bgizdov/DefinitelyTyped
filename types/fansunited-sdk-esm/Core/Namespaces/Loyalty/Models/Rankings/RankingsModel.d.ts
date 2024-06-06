import GamesListModel from "../../../TopX/Models/Games/GamesListModel";
import { GameType, RankingsType } from "../../Types/LoyaltyTypes";
import LeaderboardModel from "../Leaderboard/LeaderboardModel";
import TemplateModel from "../Template/TemplateModel";
export default class RankingsModel extends LeaderboardModel {
    id: string;
    rankType: RankingsType;
    model: TemplateModel | GamesListModel;
    gameType: GameType;
}
