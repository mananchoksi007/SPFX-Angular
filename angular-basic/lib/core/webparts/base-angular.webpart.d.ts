/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * Angular2 web part base class
 */
import 'core-js/es6/object';
import "reflect-metadata";
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { ModuleWithProviders } from '@angular/core';
/**
 * All Angular2 client side web parts should inherit from this class.
 */
export declare abstract class BaseAngularWebPart<TProperties> extends BaseClientSideWebPart<TProperties> {
    /**
     * Reference to the root application.
     */
    private _app;
    /**
     * Reference to the zone of the angular2 application to put execution (and all async tasks) in the Angular controlled zone.
     */
    private _zone;
    /**
     * Reference to the root component.
     */
    private _component;
    /**
     * Array of class references for the NgModule declarations.
     */
    protected readonly abstract appDeclarationTypes: any;
    /**
     * Array of class references for the NgModule imports.
     */
    protected readonly abstract importDeclarationTypes: any;
    /**
     * Array of class references for the NgModule declarations.
     */
    protected readonly abstract routes: ModuleWithProviders;
    /**
     * Array of class references for the NgModule declarations.
     */
    protected readonly abstract providers: any[];
    /**
     * On property change.
     */
    onPropertyChange(propertyPath: string, newValue: any): void;
    /**
     * Render the web part. This causes the Angular2 app to be bootstrapped which
     * in turn bootsraps the Angular2 web part root component.
     */
    render(): void;
    /**
     * Bootstrap the root component of the web part.
     */
    private _bootStrapModule();
    /**
     * Get the NgModule reference that will act as the root of this web part.
     */
    private _getModule();
}
