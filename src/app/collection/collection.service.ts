/* tslint:disable */ 
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {ArtModel} from './Art.model';
import {AuthenticationService} from '../authentication/authentication.service';
import {UserModel} from '../authentication/user.model';

@Injectable()
export class CollectionService {

    private actionUrl: string;
    private headers: Headers;
    private user: UserModel;

    constructor(private _http: Http, private authenticationService: AuthenticationService) {

        this.user = authenticationService.getLoggedUser();

        this.actionUrl = 'https://staging.artrium.me/api/users/';/*url should be /arts*/

        this.headers = new Headers();
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }


    public getAllWithoutModel() {

        let collectionData = {
            'session' : {
                   'user_token': this.user.authentication_token
            }

        };

        let options = new RequestOptions({ body: JSON.stringify(collectionData) });

        return this._http.get(this.actionUrl + this.user.id + '/favorite_arts',options).map(res => res.json());

    }

}
