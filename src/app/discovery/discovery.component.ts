/* tslint:disable */ 
import {Component, OnInit} from '@angular/core';
import {DiscoveryService} from './discovery.service';
import {ArtModel} from './Art.model';

@Component({
    moduleId: module.id,
    selector: 'artrium-discovery',
    templateUrl: 'discovery.html',
    providers: [ DiscoveryService],
    styleUrls: [
        'discovery.css'
    ]
})
export class DiscoveryComponent implements OnInit {

    public list = [];
    public myItems: ArtModel [];

    constructor(  private _dataService: DiscoveryService) {}

    ngOnInit() {
        this.getArts();
    }

    private getArts() {
        this._dataService.getAllWithoutModel()
            .subscribe(
                data => this.list = data.arts ,
                () => console.log('data load complete')
            );
    }


}
