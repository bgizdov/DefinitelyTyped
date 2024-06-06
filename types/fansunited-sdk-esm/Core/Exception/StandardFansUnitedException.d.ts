export interface StandardFansUnitedExceptionInterface {
    code: number;
    status: string;
    message: string;
}
export default class StandardFansUnitedException {
    error: StandardFansUnitedExceptionInterface;
    constructor(code: number, status: string, message: string);
}
