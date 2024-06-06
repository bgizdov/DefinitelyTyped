import ContextModel from "../../Activity/Models/RequestBody/Context/ContextModel";
export default class PostCreateModel {
    content: string;
    reply_id: string | null;
    context: ContextModel;
}
