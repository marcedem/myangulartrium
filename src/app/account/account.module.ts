/* tslint:disable */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './index';

@NgModule({
    declarations: [
        AccountComponent
    ],
    imports: [
        FormsModule,
        RouterModule,
        BrowserModule
    ],
    exports: [
        AccountComponent
    ]
})
export class AccountModule {
}
