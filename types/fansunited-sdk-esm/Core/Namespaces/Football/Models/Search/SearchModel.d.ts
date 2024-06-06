import CompetitionBasicModel from "../Competition/CompetitionBasicModel";
import PlayerBasicModel from "../Player/PlayerBasicModel";
import TeamBasicModel from "../Team/TeamBasicModel";
export default class SearchModel {
    teams: TeamBasicModel[];
    players: PlayerBasicModel[];
    competitions: CompetitionBasicModel[];
}
