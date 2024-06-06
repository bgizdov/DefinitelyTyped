import ImagesModel from "../../../../Global/Models/Images/ImagesModel";
import FixturesGamesModel from "../Fixtures/FixturesGamesModel";
import RelatedEntity from "../../../../Global/Models/Related/RelatedEntity";
import TimeTiebreaker from "./TimeTiebreaker";
export default class GamesListModel {
    id: string;
    title: string;
    description: string;
    type: string;
    status: string;
    scheduleOpenAt: string;
    predictionsCutoff: string;
    fixtures: FixturesGamesModel[];
    tiebreaker: TimeTiebreaker;
    participantsCount: number;
    related: RelatedEntity[];
    excludedProfileIds: string[];
    rules: string;
    labels: Record<string, string>;
    customFields: Record<string, string>;
    flags: string[];
    images: ImagesModel;
    createdAt: string;
    updatedAt: string;
}
