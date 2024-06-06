import FootballCountryModel from "../Country/FootballCountryModel";
export default class PlayerSquadModel {
    id: string;
    startDate: string;
    endDate: string;
    shirtNumber: number;
    loan: boolean;
    position: string;
    country: FootballCountryModel;
    name: string;
    assets: {};
    birthDate: string;
}
