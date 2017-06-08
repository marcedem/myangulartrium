/* tslint:disable */
import { Routes } from '@angular/router';

import { UploadComponent } from './upload.component';
import {AuthorizedRoute} from "../authentication/authorizedroute.service";

export const UploadRoutes: Routes = [
   {
        path: 'upload',
        component: UploadComponent,
        canActivate: [AuthorizedRoute]
    }
];
