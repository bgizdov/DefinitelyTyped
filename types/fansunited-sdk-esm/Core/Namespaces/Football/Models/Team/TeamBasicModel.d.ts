import FootballCountryModel from "../Country/FootballCountryModel";
export default class TeamBasicModel {
    id: string;
    country: FootballCountryModel;
    gender: string;
    assets: {};
    name: string;
    code: string;
    national: boolean;
    fullName: string;
    shortName: string;
    isDeleted: boolean;
}
