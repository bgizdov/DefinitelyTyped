import ImagesModel from "../../../../Global/Models/Images/ImagesModel";
import MiniGamesContext from "../MiniGamesContext";
import EitherOrPointsModel from "./EitherOrPointsModel";
export default class EitherOrBasicModel {
    id: string;
    title: string;
    description: string;
    images: ImagesModel;
    flags: string[];
    status: string;
    winningCondition: string;
    lives: number;
    time: number;
    points: EitherOrPointsModel[];
    customFields: Record<string, string>;
    labels: Record<string, string>;
    adContent: string;
    context: MiniGamesContext;
    type: string;
    createdAt: string;
    updatedAt: string;
}
