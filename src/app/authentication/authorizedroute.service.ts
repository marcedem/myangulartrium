/* tslint:disable */
// tslint:disable-next-line:no-unused-variable
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthorizedRoute implements CanActivate {

    constructor(protected router: Router, private authService: AuthenticationService) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (state.url !== '/login' && !this.authService.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }


}

