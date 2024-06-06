import SDKConfigurationModel from "../../../../Configurator/Models/SDKConfiguraitonModel";
import IdMappingService from "../../../../IdMapping/IdMappingService";
import MatchSummaryModel from "./MatchSummaryModel";
export default class MatchSummaryRemapper {
    private remapPredictions;
    constructor(config: SDKConfigurationModel, idMapping: IdMappingService);
    remapResponse: (response: any) => MatchSummaryModel;
}
