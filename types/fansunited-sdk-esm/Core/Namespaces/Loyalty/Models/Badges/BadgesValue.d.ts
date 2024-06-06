import RequirementModel from "./RequirementModel";
export interface BadgeAssets {
    mainImageUrl: string;
}
export default class BadgesValue {
    id: string;
    label: string;
    assets: BadgeAssets;
    enabled: boolean;
    requirements: RequirementModel;
}
