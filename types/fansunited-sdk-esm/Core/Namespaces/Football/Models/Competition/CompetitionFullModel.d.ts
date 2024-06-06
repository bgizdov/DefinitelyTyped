import FootballCountryModel from "../Country/FootballCountryModel";
import TeamBasicModel from "../Team/TeamBasicModel";
export default class CompetitionFullModel {
    id: string;
    country: FootballCountryModel;
    gender: string;
    assets: {};
    type: string;
    name: string;
    participants: TeamBasicModel[];
}
