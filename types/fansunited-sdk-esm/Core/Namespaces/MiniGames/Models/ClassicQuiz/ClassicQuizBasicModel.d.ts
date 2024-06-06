import ImagesModel from "../../../../Global/Models/Images/ImagesModel";
import MiniGamesContext from "../MiniGamesContext";
export default class ClassicQuizBasicModel {
    id: string;
    title: string;
    description: string;
    type: string;
    images: ImagesModel;
    participationCount: number;
    questionsCount: number;
    status: string;
    flags: string[];
    customFields: Record<string, string>;
    labels: Record<string, string>;
    time: number;
    averageScore: number;
    perfectScore: number;
    adContent: string;
    context: MiniGamesContext;
    createdAt: string;
    updatedAt: string;
}
