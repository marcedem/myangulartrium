/* tslint:disable */ 
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { CommunityguideComponent} from './index';

@NgModule({
    declarations: [

        CommunityguideComponent
    ],
    exports: [

        CommunityguideComponent
    ],
    imports: [
        HttpModule,
        BrowserModule
    ]
})
export class CommunityguideModule {
}
