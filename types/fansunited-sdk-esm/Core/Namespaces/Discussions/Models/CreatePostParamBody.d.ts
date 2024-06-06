import ContextModel from "../../Activity/Models/RequestBody/Context/ContextModel";
export default class CreatePostParamBody {
    content: string;
    replyId: string | null;
    context: ContextModel;
}
