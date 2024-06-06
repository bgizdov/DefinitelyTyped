import FootballCountryModel from "../Country/FootballCountryModel";
export default class TopPlayerModel {
    id: string;
    country: FootballCountryModel;
    birthDate: string;
    firstName: string;
    lastName: string;
    name: string;
    position: string;
    assets: {};
}
