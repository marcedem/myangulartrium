/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, UserModel } from '../authentication/index';

@Component({
    moduleId: module.id,
    selector: 'artrium-login',
    templateUrl: 'account.html',
    providers: [AuthenticationService]
})

export class AccountComponent implements OnInit {
    model: any = {};
    loading = false;
    public currentUser: UserModel;

    constructor(private router: Router, private authenticationService: AuthenticationService) {
        this.currentUser = authenticationService.getLoggedUser();
    }

    ngOnInit() {
        // reset login status
        // this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
            data => {
                this.router.navigate(['/']);
            },
            error => {
                this.loading = false;
            });
    }
    logout() {
        this.authenticationService.logout();
    }
}
