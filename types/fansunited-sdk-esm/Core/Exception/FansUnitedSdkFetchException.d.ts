import { StandardFansUnitedExceptionInterface } from "./StandardFansUnitedException";
export interface DefaultFansUnitedExceptionInterface {
    error: StandardFansUnitedExceptionInterface;
}
export default class FansUnitedSdkFetchException {
    data: DefaultFansUnitedExceptionInterface;
    status: number;
    statusText: string;
    headers: Headers;
    constructor(response: Response, error: StandardFansUnitedExceptionInterface);
    errorMessage: () => string;
}
