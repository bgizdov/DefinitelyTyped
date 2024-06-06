import DictionaryModel from "./DictionaryModel";
export default class AutomaticModerationModel {
    enabled: boolean;
    moderateLinks: boolean;
    linksWhitelist: string[];
    moderatorProfileId: string;
    dictionary: DictionaryModel;
}
