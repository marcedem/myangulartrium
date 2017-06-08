/* tslint:disable */ 
import {Component, OnInit} from '@angular/core';
import {CommunityguideService} from './communityguide.service';

@Component({
    moduleId: module.id,
    selector: 'artrium-discovery',
    templateUrl: 'communityguide.html',
    providers: [ CommunityguideService ],
    styleUrls: [
        'communityguide.css'
    ]
})
export class CommunityguideComponent implements OnInit {

    public list = [];

    constructor(  private _dataService: CommunityguideService) {}

    ngOnInit() {
        // ...
    }

}
