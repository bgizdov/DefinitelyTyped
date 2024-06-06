import ContextModel from "./RequestBody/Context/ContextModel";
export default class ActivityResponseBody {
    id: string;
    profileId: string;
    property: string;
    value: string;
    action: string;
    context: ContextModel;
    points: number;
}
