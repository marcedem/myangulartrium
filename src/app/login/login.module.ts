/* tslint:disable */ 
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './index';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {
}
