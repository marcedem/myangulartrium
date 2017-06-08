/* tslint:disable */
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { UploadComponent } from './index';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
    declarations: [

        UploadComponent
    ],
    exports: [

        UploadComponent
    ],
    imports: [
        HttpModule,
        BrowserModule,
        FileUploadModule
    ]
})
export class UploadModule {
}
