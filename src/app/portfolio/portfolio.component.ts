/* tslint:disable */
import { Component, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import { PortfolioService } from './portfolio.service';
import { AuthenticationService, UserModel } from '../authentication/index';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { ArtModel } from './Art.model';

@Component({
  moduleId: module.id,
  selector: 'artrium-portfolio',
  templateUrl: 'portfolio.html',
  providers: [ PortfolioService, AuthenticationService ],
  styleUrls: [
      'portfolio.css'
  ]
})
export class PortfolioComponent implements OnInit {

  data: any;
  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;
  cropperSettings: CropperSettings;

  public file_srcs: string[] = [];
  public myArt: ArtModel;
  public list: ArtModel[] = [];

  private model = new ArtModel();
  private actionUrl: string;
  public uploader: FileUploader ;
  public user: UserModel;
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;


  constructor(private changeDetectorRef: ChangeDetectorRef, private _portfolioService: PortfolioService, private router: Router, private authenticationService: AuthenticationService) {

    this.actionUrl = 'https://staging.artrium.me/api/users/';

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.noFileInput = true;
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth = 100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 500;
    this.cropperSettings.canvasHeight = 400;



    if (authenticationService.isLoggedIn()) {
          this.user = authenticationService.getLoggedUser();
          this.uploader = new FileUploader({url: this.actionUrl + this.user.id + '/arts', itemAlias: 'photo'});

    }




    this.data = {};

  };


  ngOnInit() {
    this.getPortfolio();
  }


  private getPortfolio() {
    this._portfolioService.GetAll()
      .subscribe(
      data => this.list = data,
    /*  err => {
        // Log errors if any
        console.log(err);
      },*/
      () => console.log('portfolio load complete' + this.list)
      );
  }


/*  private UploadArt() {
    this._portfolioService.Upload(this.model)
      .subscribe(
      data => this.myArt = data,
      () => console.log('data upload complete')
      )


  }
*/

private UploadArt() {
    // write some code to get the data from the form here.
    this.prepareUploader(this.model);
    this.uploader.uploadAll();
}



private prepareUploader(formData) {

  let art = JSON.stringify(formData);

  this.uploader.onBuildItemForm = (item, form) => {
    form.append('art', art);
    form.append('user_token', this.user.authentication_token);
  };
}

  // This is called when the user selects new files from the upload button
  fileChange(input) {
    this.readFiles(input.files);
  }

  readFile(file, reader, callback) {
    // Set a callback funtion to fire after the file is fully loaded
    reader.onload = () => {
      // callback with the results
      callback(reader.result);
    };

    // Read the file
    reader.readAsDataURL(file);
  }

  readFiles(files, index = 0) {
    // Create the file reader
    let reader = new FileReader();

    // If there is a file
    if (index in files) {
      // Start reading this file
      this.readFile(files[index], reader, (result) => {
        let image: any = new Image();
        // After the callback fires do:
        image.src = result;
        this.cropper.setImage(image);
        this.file_srcs.push(result);
        this.readFiles(files, index + 1);  // Read the next file;

      });
    } else {
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
    }
  }

}
