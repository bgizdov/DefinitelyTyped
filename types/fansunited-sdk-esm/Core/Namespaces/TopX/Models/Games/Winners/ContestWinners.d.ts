import TemplateModel from "../../../../Loyalty/Models/Template/TemplateModel";
import GamesListModel from "../GamesListModel";
import UserListWinners from "./UserListWinners";
export default class ContestWinners {
    contestId: string;
    contestType: "GAME" | "TEMPLATE";
    contestModel: GamesListModel | TemplateModel;
    description: string;
    userList: UserListWinners[];
}
