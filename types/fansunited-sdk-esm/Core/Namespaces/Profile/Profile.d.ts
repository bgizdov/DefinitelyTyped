import OwnProfileBuilder from "./Builders/OwnProfileBuilder";
import ProfileBuilder from "./Builders/ProfileBuilder";
import SDKConfigurationModel from "../../Configurator/Models/SDKConfiguraitonModel";
export default class Profile {
    private idsRemapper;
    private profileHttps;
    private activityHttps;
    private footballHttps;
    private footballFacade;
    private idMapping;
    private localCache;
    private profileFacade;
    private ownProfileBuilder;
    private profileBuilder;
    constructor(config: SDKConfigurationModel);
    getOwn: () => OwnProfileBuilder;
    getById: (id: string) => ProfileBuilder;
    getCountries: (disableCache?: boolean) => Promise<Array<import("./Models/ProfileCountryModel").default>>;
    getByIds: (profileIds?: string[], search?: string, disableCache?: boolean) => Promise<Array<import("./Models/ProfileModel").default>>;
}
