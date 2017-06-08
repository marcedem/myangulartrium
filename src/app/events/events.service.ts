/* tslint:disable */ 
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {EventsModel} from './events.model';

@Injectable()
export class EventsService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http) {

        this.actionUrl = 'http://artrium.me/api/users/:user_id/events';

        this.headers = new Headers();
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<EventsModel[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <EventsModel[]>response.json())
            .catch(this.handleError);
    }

    public getAllWithoutModel() {
        return this._http.get(this.actionUrl).map(res => res.json());
    }

     private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
