import ImagesModel from "../../../../Global/Models/Images/ImagesModel";
export default class PollOptionModel {
    id: string;
    title: string;
    description: string;
    images: ImagesModel;
    votes: number;
}
