/* tslint:disable */ 
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from '../authentication/index';

declare const FB: any;

@Component({
    moduleId: module.id,
    selector: 'artrium-login',
    templateUrl: 'login.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;

    constructor(private router: Router,
                private authenticationService: AuthenticationService) {
        FB.init({
            appId: '1605448909780969',
            cookie: false,  // enable cookies to allow the server to access
            // the session
            xfbml: true,  // parse social plugins on this page
            version: 'v2.8' // use graph api version 2.8
        });

    }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        this.authenticationService.connectionEventSoure(false);

        FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });
    }

    onFacebookLoginClick() {

        let authService=this.authenticationService;
        let data: any;
        FB.login(logResp => {
            let user_id: any;
            if (logResp.authResponse) {
                 user_id='/'+logResp.authResponse.userID+'?fields=name,firts_name,last_name,email,picture';
                   
                  FB.api('/me', {fields: 'id,first_name,last_name,email,name,gender,picture'}, function(response) {
                   data=response;
                    localStorage.setItem('currentUser', JSON.stringify(response));
                    authService.retrieveFacebookUserData(response);
                  });
                this.authenticationService.connectionEventSoure(true);
                this.router.navigateByUrl('/');

            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, {scope: 'public_profile,email'});
 

    }

    statusChangeCallback(resp) {
        if (resp.status === 'connected') {
            console.log('else connecte');
        } else if (resp.status === 'not_authorized') {
            console.log('else not authorized');
        } else {
            console.log('else else');
        }
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.authenticationService.connectionEventSoure(true);
                    this.router.navigateByUrl('/');
                },
                error => {
                    this.loading = false;
                });
    }
}
