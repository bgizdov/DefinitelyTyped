import PaginationModel from "../../../../Global/Models/Pagination/PaginationModel";
export default class FollowersRemapper {
    followersFromResponse: (response: any) => PaginationModel;
    private remapResponse;
}
