import { IApplicationConfigurationProps } from './application.configuration.props';
export declare class ConfigurationService {
    mocked: boolean;
    listName: string;
    description: string;
    styles: any;
    load(data: IApplicationConfigurationProps): void;
}
