/* tslint:disable */ 
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { NavbarComponent } from './index';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        RouterModule,
        BrowserModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule {
}
