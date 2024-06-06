import ImagesModel from "../../../../Global/Models/Images/ImagesModel";
import RelatedEntity from "../../../../Global/Models/Related/RelatedEntity";
import TimeTiebreaker from "../../../TopX/Models/Games/TimeTiebreaker";
import FixturesMatchQuizModel from "../Fixtures/FixturesMatchQuizModel";
export default class GamesMatchQuizListModel {
    id: string;
    title: string;
    description: string;
    type: string;
    status: string;
    outcome: string;
    predictionsCutoff: string;
    fixtures: FixturesMatchQuizModel[];
    tiebreaker: TimeTiebreaker;
    predictionId: string;
    participantsCount: number;
    related: RelatedEntity[];
    excludedProfileIds: string[];
    rules: string;
    flags: string[];
    points: number;
    createdAt: string;
    updatedAt: string;
    predictionsMadeAt: string;
    images: ImagesModel;
    scheduleOpenAt: string;
}
