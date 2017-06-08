/* tslint:disable */ 
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { EventsComponent} from './index';

@NgModule({
    declarations: [

        EventsComponent
    ],
    exports: [

        EventsComponent
    ],
    imports: [
        HttpModule,
        BrowserModule
    ]
})
export class EventsModule {
}
