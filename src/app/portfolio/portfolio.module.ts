/* tslint:disable */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './index';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import { FileUploadModule } from 'ng2-file-upload';



@NgModule({
  imports: [BrowserModule,
            FormsModule,
            FileUploadModule],
  declarations: [PortfolioComponent,
    ImageCropperComponent],
  exports: [PortfolioComponent]

})

export class PortfolioModule {
}
