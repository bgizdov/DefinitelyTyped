export default class FansUnitedSdkException extends Error {
    code: number;
    status: string;
    message: string;
    constructor(code: number, status: string, message: string);
    errorMessage: () => string;
}
