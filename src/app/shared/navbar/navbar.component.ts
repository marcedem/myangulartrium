/* tslint:disable */
import {Component, Input, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';
import {UserModel} from '../../authentication/user.model';
import { Subscription }   from 'rxjs/Subscription';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'artrium-navbar',
    templateUrl: 'navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

    @Input() brand: string;
    @Input() logIn = false;
    public currentUser: UserModel;
    subscription: Subscription;


    constructor(private authenticationService: AuthenticationService, private router: Router, private cd: ChangeDetectorRef) {
        this.currentUser=authenticationService.getLoggedUser();
        this.logIn=authenticationService.isLoggedIn();

        this.subscription = authenticationService.connectionEvent$.subscribe(
            status => {
                this.logIn=status;
                this.cd.markForCheck();
            });


    }

    logout() {
        this.authenticationService.logout();
        // this.authenticationService.connectionEventSoure(false);
        this.logIn=false;
        this.router.navigate(['']);
    }


}
