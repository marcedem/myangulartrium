/* tslint:disable */ 
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { CollectionComponent} from './index';

@NgModule({
    declarations: [

        CollectionComponent
    ],
    exports: [

        CollectionComponent
    ],
    imports: [
        HttpModule,
        BrowserModule
    ]
})
export class CollectionModule {
}
