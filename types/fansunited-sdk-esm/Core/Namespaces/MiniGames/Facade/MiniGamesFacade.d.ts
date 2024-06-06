import SDKConfigurationModel from "../../../Configurator/Models/SDKConfiguraitonModel";
import MiniGamesHttps from "../../../Https/MiniGamesHttps";
import ActivityService from "../../Activity/Service/ActivityService";
import { EitherOrParticipationCallback } from "../Interfaces/MiniGamesInterfaces";
import ClassicQuizFilters from "../Models/ClassicQuiz/ClassicQuizFilters";
import ClassicQuizParticipationBodyModel from "../Models/ClassicQuiz/ClassicQuizParticipationBodyModel";
import EitherOrFilters from "../Models/EitherOr/EitherOrFilters";
import EitherOrParticipationRequestModel from "../Models/EitherOr/Participation/EitherOrParticipationRequestModel";
import MiniGamesService from "../Service/MiniGamesService";
export default class MiniGamesFacade {
    readonly https: MiniGamesHttps;
    readonly service: MiniGamesService;
    readonly activityService: ActivityService;
    readonly idSchema: string;
    constructor(config: SDKConfigurationModel);
    getClassicQuizzes: (filters?: ClassicQuizFilters, showFullContextData?: boolean, disableCache?: boolean) => Promise<import("../Models/ClassicQuiz/ClassicQuizzesModel").default>;
    getClassicQuizById: (classicQuizId: string, disableCache?: boolean) => Promise<import("../Models/ClassicQuiz/ClassicQuizFullModel").default>;
    participateInClassicQuiz: (classicQuizId: string, questions: ClassicQuizParticipationBodyModel[], includeCorrectOptionIds?: boolean) => Promise<import("../Models/ClassicQuiz/ClassicQuizParticipationModel").default>;
    getMyClassicQuizParticipations: (classicQuizIds: Array<string>) => Promise<import("../Models/ClassicQuiz/ClassicQuizUserParticipationModel").default[]>;
    getEitherOrs: (filters?: EitherOrFilters, showFullContextData?: boolean, disableCache?: boolean) => Promise<import("../Models/EitherOr/EitherOrsModel").default>;
    getEitherOrById: (eitherOrId: string, disableCache?: boolean) => Promise<import("../Models/EitherOr/EitherOrFullModel").default>;
    getMyEitherOrStats: (eitherOrId: string) => Promise<import("../Models/EitherOr/EitherOrStatsModel").default>;
    getEitherOrResults: (eitherOrId: string, disableCache?: boolean) => Promise<import("../Models/EitherOr/Results/EitherOrResultsModel").default>;
    participateInEitherOr: (eitherOrId: string, participation: EitherOrParticipationRequestModel | null, onEitherOrParticipationCallbacks?: EitherOrParticipationCallback) => Promise<import("../Models/EitherOr/Participation/EitherOrParticipationModel").default>;
    private remapTags;
}
