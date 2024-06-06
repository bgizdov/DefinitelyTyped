import TiebreakerModel from "../../../TopX/Models/Games/TiebreakerModel";
import FixturesResponseModel from "../Fixtures/FixturesResponseModel";
export default class PredictionResponseModel {
    id: string;
    gameInstanceId: string;
    gameType: string;
    wager: number;
    totalFixtures: number;
    settledFixtures: number;
    userId: string;
    fixtures: FixturesResponseModel[];
    status: string;
    tiebreaker: TiebreakerModel;
    points: number;
    createdAt: string;
    updatedAt: string;
}
