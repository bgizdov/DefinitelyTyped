import PaginationModel from "../../../../Global/Models/Pagination/PaginationModel";
export default class FollowingRemapper {
    followResponse: (response: any) => any;
    followingFromResponse: (response: any) => PaginationModel;
    private remapResponse;
}
