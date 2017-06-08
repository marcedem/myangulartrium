/* tslint:disable */
import { Routes, RouterModule } from '@angular/router';
import { CollectionRoutes } from './collection/index';
import { DiscoveryRoutes } from './discovery/index';
import { LoginRoutes } from './login/login.routes';
import { AccountRoutes } from './account/index';
import { PortfolioRoutes } from './portfolio/index';
import { UploadRoutes } from './upload/index';
import { AboutRoutes } from './shared/about/index';
import { CommunityRoutes } from './shared/community/index';


const appRoutes: Routes = [
    ...DiscoveryRoutes,
    ...CollectionRoutes,
    ...LoginRoutes,
    ...AccountRoutes,
    ...PortfolioRoutes,
    ...UploadRoutes,
    ...AboutRoutes,
    ...CommunityRoutes

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
