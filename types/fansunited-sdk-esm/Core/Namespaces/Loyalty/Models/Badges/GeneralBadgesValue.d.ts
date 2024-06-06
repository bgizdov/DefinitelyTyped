import { BadgeAssets } from "./BadgesValue";
import GeneralRequirementModel from "./GeneralRequirementModel";
export default class GeneralBadgesValue {
    id: string;
    label: string;
    assets: BadgeAssets;
    enabled: boolean;
    requirements: GeneralRequirementModel;
}
