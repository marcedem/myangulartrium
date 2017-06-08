/* tslint:disable */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule, FooterModule, AboutModule, CommunityModule } from './shared';
import { DiscoveryModule } from './discovery/discovery.module';
import { CommunityguideModule } from './communityguide/communityguide.module';
import { CollectionModule } from './collection/collection.module';
import { LoginModule } from './login/login.module';
import { AccountModule } from './account/account.module';
import { UploadModule } from './upload/upload.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthorizedRoute } from './authentication/authorizedroute.service';
import { FileSelectDirective } from 'ng2-file-upload';
// import { MaterializeDirective } from 'angular2-materialize';

@NgModule({
    declarations: [
        AppComponent
        //  , MaterializeDirective
    ],
    imports: [
        NavbarModule,
        FooterModule,
        AboutModule,
        CommunityModule,
        LoginModule,
        DiscoveryModule,
        CommunityguideModule,
        CollectionModule,
        AccountModule,
        UploadModule,
        PortfolioModule,
        routing
    ],
    providers: [APP_PROVIDERS, appRoutingProviders, AuthenticationService, AuthorizedRoute],
    bootstrap: [AppComponent]
})
export class AppModule {
}
