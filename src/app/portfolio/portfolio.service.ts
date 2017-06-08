/* tslint:disable */

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { ArtModel } from './Art.model';
import { UserModel } from '../authentication/user.model';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class PortfolioService {

    private actionUrl: string;
    private headers: Headers;
    private user: UserModel;

    constructor(private _http: Http, private authenticationService: AuthenticationService) {

        this.actionUrl = 'https://staging.artrium.me/api/users/';


        /*check if user is logged in*/
        if (authenticationService.isLoggedIn()) {
            this.user = authenticationService.getLoggedUser();
            console.log(this.user.id);
            console.log(this.actionUrl + this.user.id + '/arts?');
        }

        this.headers = new Headers();
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }


    public GetAll = (): Observable<ArtModel[]> => {

        /**  
         let user = {
                     'user_token': this.user.authentication_token
                     };
          it should use URLSearchParams not only RequestOptions
    
          let options = new RequestOptions({ body: JSON.stringify(user) });
        */
        //   console.log(options);

        return this._http.get(this.actionUrl + this.user.id + '/arts?user_token=' + this.user.authentication_token)
            .map((response: Response) => <ArtModel[]>response.json())
            .catch(this.handleError);
    }

    public Upload = (art: ArtModel): Observable<ArtModel> => {

        let collectionData = {
            art,
            'user_token': this.user.authentication_token
        };

        let body = JSON.stringify(collectionData);


        return this._http.post(this.actionUrl + this.user.id + '/arts', body, { headers: this.headers })
            .map((response: Response) => <ArtModel>response.json())
            .catch(this.handleError);
    }

    public Update = (id: number, itemToUpdate: ArtModel): Observable<ArtModel> => {
        return this._http.put(this.actionUrl + this.user.id + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map((response: Response) => <ArtModel>response.json())
            .catch(this.handleError);
    }

    public Delete = (id: number): Observable<Response> => {
        return this._http.delete(this.actionUrl + this.user.id + id)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
