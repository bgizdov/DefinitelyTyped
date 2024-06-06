import FootballCountryModel from "../Country/FootballCountryModel";
import CompetitionBasicModel from "../Competition/CompetitionBasicModel";
import TeamBasicModel from "../Team/TeamBasicModel";
export default class PlayerFullModel {
    id: string;
    country: FootballCountryModel;
    birthDate: string;
    firstName: string;
    lastName: string;
    name: string;
    position: string;
    assets: {};
    isDeleted: boolean;
    competitions: CompetitionBasicModel[];
    teams: TeamBasicModel[];
}
