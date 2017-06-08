/* tslint:disable */ 
import { Injectable } from '@angular/core';
import { Response, Http, RequestOptions, Request, Headers, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {UserModel} from './user.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {


     SERVER_URL: string;
     headers: Headers;
     loggedIn = false;
     userLogged: UserModel;

    // Observable string sources
     userConnectionStatus = new Subject<boolean>();

    // Observable string streams
    connectionEvent$ = this.userConnectionStatus.asObservable();

    // Service message commands
    connectionEventSoure(event: boolean) {
        this.userConnectionStatus.next(event);

    }

    constructor(private _http: Http) {
        this.SERVER_URL = 'https://staging.artrium.me';
        this.loggedIn = !!localStorage.getItem('currentUser');

    }

    login(login: string, password: string) {

        let userData = {
            'user': {
                'login': login,
                'password': password
            }
        };

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');

        return this._http.post(this.SERVER_URL + '/api/sign_in', JSON.stringify(userData), {headers: this.headers})
            .map((response: Response) => {

                let user = response.json();
                if (user) {
                    this.userLogged = user.user;
                    // store user details in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.user));
                    this.loggedIn = true;
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.userLogged = null;
        this.loggedIn = false;
    }

    retrieveFacebookUserData(response) {
        let id = response.id;
        this.signUP(response.email, response.first_name, response.last_name, response.id)
            .subscribe(
                data => {
                    console.log(data);
                    this.connectionEventSoure(true);
                },
                error => {
                    console.log(error);
                });
    }


    signUP(email: string, first_name: string, last_name: string,id: string) {
        console.log('inside signup');
        let userData = {
            'user': {
                'email': email,
                'first_name': first_name,
                'last_name': last_name,
                'fb_id': id
            }
        };

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');

        return this._http.post(this.SERVER_URL + '/api/sign_up', JSON.stringify(userData), {headers: this.headers})
            .map((response: Response) => {

                console.log('reponse signup');
                console.log(response);
                let user = response.json();
                if (user) {
                    this.userLogged = user.user;
                    // store user details in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.user));
                    this.loggedIn = true;
                }
            });
    }


    isLoggedIn() {
        return this.loggedIn;
    }

    getLoggedUser() {

        if (this.loggedIn) {
            this.userLogged = JSON.parse(localStorage.getItem('currentUser'));
        }
        return this.userLogged;
    }
}

