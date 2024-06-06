import { EnvironmentType, ErrorHandlingModeType, IdSchemaType, LangType } from "../Types/ConfiguratorTypes";
import FansUnitedAuthInterface from "./FansUnitedAuthInterface";
export default class SDKConfigurationModel {
    apiKey: string;
    clientId: string;
    environment?: EnvironmentType;
    idSchema?: IdSchemaType;
    lang?: LangType;
    errorHandlingMode?: ErrorHandlingModeType;
    authProvider: FansUnitedAuthInterface;
}
