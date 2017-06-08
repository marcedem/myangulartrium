/* tslint:disable */ 
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { FooterComponent } from './index';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        RouterModule,
        BrowserModule
    ],
    exports: [
        FooterComponent
    ]
})
export class FooterModule {
}
