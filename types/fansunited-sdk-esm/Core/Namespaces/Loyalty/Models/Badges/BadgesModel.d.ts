import BadgesValue from "./BadgesValue";
import GeneralBadgesValue from "./GeneralBadgesValue";
export default class BadgesModel {
    general: GeneralBadgesValue[];
    predictor: BadgesValue[];
    topX: BadgesValue[];
    matchQuiz: BadgesValue[];
}
