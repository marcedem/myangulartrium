/* tslint:disable */ 
import {Component, OnInit} from '@angular/core';
import {EventsService} from './events.service';

@Component({
    moduleId: module.id,
    selector: 'artrium-discovery',
    templateUrl: 'events.html',
    providers: [ EventsService],
    styleUrls: [
        'events.css'
    ]
})
export class EventsComponent implements OnInit {

    public list = [];
    // public myItems: ArtModel [];

    constructor(  private _dataService: EventsService) {}

    ngOnInit() {
        this.getEvents();
    }

    private getEvents() {
        this._dataService.getAllWithoutModel()
            .subscribe(
                data => this.list = data.arts ,
                () => console.log('data load complete')
            );
    }


}
