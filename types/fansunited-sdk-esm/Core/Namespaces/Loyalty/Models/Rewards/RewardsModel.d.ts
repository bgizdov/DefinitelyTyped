import PointsModel from "../Points/PointsModel";
import TiersModel from "../Tiers/TiersModel";
import BadgesModel from "../Badges/BadgesModel";
export default class RewardsModel {
    points: PointsModel;
    tiers: TiersModel[];
    badges: BadgesModel;
}
