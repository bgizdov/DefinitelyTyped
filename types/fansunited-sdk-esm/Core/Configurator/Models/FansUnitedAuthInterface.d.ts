export default interface FansUnitedAuthInterface {
    getIdToken: () => string;
    logout: () => void;
}
