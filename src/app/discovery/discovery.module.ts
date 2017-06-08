/* tslint:disable */ 
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { DiscoveryComponent} from './index';

@NgModule({
    declarations: [

        DiscoveryComponent
    ],
    exports: [

        DiscoveryComponent
    ],
    imports: [
        HttpModule,
        BrowserModule
    ]
})
export class DiscoveryModule {
}
