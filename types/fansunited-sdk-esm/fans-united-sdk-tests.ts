import FansUnitedSDK = require("fansunted-sdk-esm");

// import SDKConfigurationModel from "./Core/Configurator/Models/SDKConfiguraitonModel";
// import FansUnitedSDKModel from "./Core/Global/Models/FansUnitedSDKModel";

const SDK_CONFIG = {
    apiKey: "XXXYYYXXX-EXAMPLE-API-KEY-XXXYYYXXX",
    clientId: "example_client_id",
    authProvider: {
      getIdToken: () => { },
      logout: () => {}
    }
  };

const sdk = FansUnitedSDK(SDK_CONFIG);
sdk.football.getMatchById("fb:m:123").then((match) => {console.log(match);});
sdk.profile.getCountries().then((countries) => {console.log(countries);});