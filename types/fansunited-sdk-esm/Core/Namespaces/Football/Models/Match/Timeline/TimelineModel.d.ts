import PlayerShortModel from "../../Player/PlayerShortModel";
export default class TimelineModel {
    minute: string;
    type: string;
    teamId: string;
    player: PlayerShortModel;
    relatedPlayer: PlayerShortModel;
    updatedAt: string;
}
