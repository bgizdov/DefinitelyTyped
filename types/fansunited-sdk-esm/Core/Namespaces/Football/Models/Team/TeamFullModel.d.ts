import FootballCountryModel from "../Country/FootballCountryModel";
import CompetitionBasicModel from "../Competition/CompetitionBasicModel";
import PlayerSquadModel from "../Player/PlayerSquadModel";
import TeamColors from "./TeamColors";
export default class TeamFullModel {
    id: string;
    country: FootballCountryModel;
    gender: string;
    assets: {};
    name: string;
    competitions: CompetitionBasicModel[];
    code: string;
    national: boolean;
    fullName: string;
    shortName: string;
    isDeleted: boolean;
    colors: TeamColors;
    squad: PlayerSquadModel[];
}
