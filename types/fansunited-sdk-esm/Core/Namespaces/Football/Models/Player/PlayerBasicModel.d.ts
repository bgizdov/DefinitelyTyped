import FootballCountryModel from "../Country/FootballCountryModel";
import TeamBasicModel from "../Team/TeamBasicModel";
export default class PlayerBasicModel {
    id: string;
    country: FootballCountryModel;
    birthDate: string;
    firstName: string;
    lastName: string;
    name: string;
    position: string;
    assets: {};
    isDeleted: boolean;
    teams: TeamBasicModel[];
}
