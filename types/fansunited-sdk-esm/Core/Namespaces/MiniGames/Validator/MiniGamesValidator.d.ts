import SDKConfigurationModel from "../../../Configurator/Models/SDKConfiguraitonModel";
import MiniGamesFilters from "../Models/Filters/MiniGamesFilters";
export default class MiniGamesValidator {
    private errorHandlingModel;
    readonly entityTypes: string[];
    constructor(config: SDKConfigurationModel);
    validateFilters: (filters: MiniGamesFilters) => void;
    private throwException;
}
