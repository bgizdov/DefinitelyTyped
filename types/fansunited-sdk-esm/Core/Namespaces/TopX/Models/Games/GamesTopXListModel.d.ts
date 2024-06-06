import ImagesModel from "../../../../Global/Models/Images/ImagesModel";
import FixturesTopXModel from "../Fixtures/FixturesTopXModel";
import RelatedEntity from "../../../../Global/Models/Related/RelatedEntity";
import TimeTiebreaker from "./TimeTiebreaker";
import TiebreakerModel from "./TiebreakerModel";
export default class GamesTopXListModel {
    id: string;
    title: string;
    description: string;
    type: string;
    status: string;
    outcome: string;
    predictionsCutoff: string;
    fixtures: FixturesTopXModel[];
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
    scheduleOpenAt: string;
    images: ImagesModel;
    predictionTiebreaker: TiebreakerModel;
}
