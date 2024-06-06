import ImagesModel from "../../../../Global/Models/Images/ImagesModel";
import ContextModel from "../../../Activity/Models/RequestBody/Context/ContextModel";
import PollOptionModel from "./PollOptionModel";
export default class PollBasicModel {
    id: string;
    title: string;
    description: string;
    type: string;
    images: ImagesModel;
    status: string;
    totalVotes: number;
    flags: string[];
    customFields: Record<string, string>;
    labels: Record<string, string>;
    adContent: string;
    context: ContextModel;
    options: PollOptionModel[];
    createdAt: string;
    updatedAt: string;
}
