/* tslint:disable */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, UserModel } from '../authentication/index';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { ArtModel } from './Art.model';

// const URL = '/api/';
// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
const URL = 'http://staging.artrium.me/api/users/';

@Component({
    moduleId: module.id,
    selector: 'artrium-upload',
    templateUrl: 'upload.html',
    providers: [AuthenticationService]
})

export class UploadComponent {

    private actionUrl: string;
    public uploader: FileUploader ;
    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;
    public user: UserModel;

    constructor(private router: Router, private authenticationService: AuthenticationService) {

        // this.uploader = new FileUploader({ url: URL });
        this.actionUrl = 'https://staging.artrium.me/api/users/';

        /*check if user is logged in*/
        if (authenticationService.isLoggedIn()) {
            this.user = authenticationService.getLoggedUser();
            console.log(this.user.id);
            console.log(this.actionUrl + this.user.id + '/arts?');
            this.uploader = new FileUploader({url: this.actionUrl + this.user.id + '/arts?user_token=' + this.user.authentication_token });
        }

    }


    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }
}
