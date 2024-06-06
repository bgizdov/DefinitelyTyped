import FootballCountryModel from "../FootballCountryModel";
export default class FootballCountryRemapper {
    countriesFromResponse: (response: any) => any;
    countryFromResponse: (response: any) => FootballCountryModel;
}
