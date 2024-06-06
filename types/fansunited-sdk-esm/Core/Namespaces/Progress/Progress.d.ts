export default class Progress {
    private KEY_PREFIX;
    get: (type: string, id: string) => any;
    set: (type: string, id: string, value: any) => string;
    delete: (type: string, id: string) => void;
}
