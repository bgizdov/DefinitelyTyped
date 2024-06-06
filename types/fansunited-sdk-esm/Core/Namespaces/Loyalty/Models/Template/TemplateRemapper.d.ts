import TemplateMeta from "../Meta/TemplateMeta";
import TemplateByIdModel from "./TemplateByIdModel";
import TemplateModel from "./TemplateModel";
export default class TemplateRemapper {
    remapResponse: (response: any[]) => TemplateModel[];
    remapResponseId: (response: any) => TemplateByIdModel;
    remapMeta: (meta: any) => TemplateMeta;
    private remapRelated;
    private remapGroups;
    private remapGroupFilters;
}
