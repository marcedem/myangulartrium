/* tslint:disable */ 
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { CommunityComponent } from './index';

@NgModule({
    declarations: [
        CommunityComponent
    ],
    imports: [
        RouterModule,
        BrowserModule
    ],
    exports: [
        CommunityComponent
    ]
})
export class CommunityModule {
}
