import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { ModuleWithProviders } from '@angular/core';
import { BaseAngularWebPart } from './../../core/webparts/base-angular.webpart';
import { IBasicAngularWebPartProps } from './IBasicAngularWebPartProps';
export default class BasicAngularWebPart extends BaseAngularWebPart<IBasicAngularWebPartProps> {
    protected importDeclarationTypes: any;
    protected readonly appDeclarationTypes: any[];
    protected readonly routes: ModuleWithProviders;
    protected readonly providers: any[];
    onInit(): Promise<void>;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
