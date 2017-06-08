/* tslint:disable */ 
import {Routes} from '@angular/router';

import {AccountComponent} from './account.component';
import {AuthorizedRoute} from "../authentication/authorizedroute.service";

export const AccountRoutes: Routes = [
    {
        path: 'account',
        component: AccountComponent,
        canActivate: [AuthorizedRoute]
    }
];
