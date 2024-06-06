import SDKConfigurationModel from "../../Configurator/Models/SDKConfiguraitonModel";
import { EitherOrParticipationCallback } from "./Interfaces/MiniGamesInterfaces";
import ClassicQuizFilters from "./Models/ClassicQuiz/ClassicQuizFilters";
import ClassicQuizParticipationBodyModel from "./Models/ClassicQuiz/ClassicQuizParticipationBodyModel";
import EitherOrFilters from "./Models/EitherOr/EitherOrFilters";
import EitherOrParticipationRequestModel from "./Models/EitherOr/Participation/EitherOrParticipationRequestModel";
export default class MiniGames {
    private facade;
    constructor(config: SDKConfigurationModel);
    getClassicQuizzes: (filters?: ClassicQuizFilters, showFullContextData?: boolean, disableCache?: boolean) => Promise<import("./Models/ClassicQuiz/ClassicQuizzesModel").default>;
    getClassicQuizById: (classicQuizId: string, disableCache?: boolean) => Promise<import("./Models/ClassicQuiz/ClassicQuizFullModel").default>;
    participateInClassicQuiz: (classicQuizId: string, questions: ClassicQuizParticipationBodyModel[], includeCorrectOptionIds?: boolean) => Promise<import("./Models/ClassicQuiz/ClassicQuizParticipationModel").default>;
    getMyClassicQuizParticipations: (classicQuizIds: string[]) => Promise<Array<import("./Models/ClassicQuiz/ClassicQuizUserParticipationModel").default>>;
    getEitherOrs: (filters?: EitherOrFilters, showFullContextData?: boolean, disableCache?: boolean) => Promise<import("./Models/EitherOr/EitherOrsModel").default>;
    getEitherOrById: (eitherOrId: string, disableCache?: boolean) => Promise<import("./Models/EitherOr/EitherOrFullModel").default>;
    getMyEitherOrStats: (eitherOrId: string) => Promise<import("./Models/EitherOr/EitherOrStatsModel").default>;
    getEitherOrResults: (eitherOrId: string, disableCache?: boolean) => Promise<import("./Models/EitherOr/Results/EitherOrResultsModel").default>;
    participateInEitherOr: (eitherOrId: string, participation: EitherOrParticipationRequestModel | null, onEitherOrParticipationCallbacks?: EitherOrParticipationCallback) => Promise<import("./Models/EitherOr/Participation/EitherOrParticipationModel").default>;
}
