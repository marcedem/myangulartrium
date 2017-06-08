/* tslint:disable */ 
import {Component, OnInit} from '@angular/core';
import {CollectionService} from './collection.service';
import {ArtModel} from './Art.model';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'artrium-collection',
    templateUrl: 'collection.html',
    providers: [ CollectionService, AuthenticationService]
})
export class CollectionComponent implements OnInit {

    public list = [];
    public myItems: ArtModel [];

    constructor(  private _dataService: CollectionService) {}

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
