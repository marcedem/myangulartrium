/* tslint:disable */ 
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { AboutComponent } from './index';

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        RouterModule,
        BrowserModule
    ],
    exports: [
        AboutComponent
    ]
})
export class AboutModule {
}
