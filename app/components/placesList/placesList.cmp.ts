import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Injectable} from 'angular2/core'
import {IPlace} from './../../app.d';
import {PlaceService} from '../../place.service';

interface IPlacesModel {
    places: IPlace[];
}

@Component({
    templateUrl: 'app/components/placesList/placesList.tpl.html',
    directives: [ROUTER_DIRECTIVES]
})

export class PlacesListComponent {
    public title: string;
    public placesModel: IPlacesModel = {
        places: []
    };
    public selectedPlace: IPlace;    

    constructor(private router: Router, private placeService: PlaceService) {
        this.placesModel = this.placeService.placesModel;
    }    

    onView(place: IPlace) { 
        this.selectedPlace = place; 
        this.router.navigate(['ViewPlace', { id: place._id }]);
    }

    onEdit(place: IPlace) { 
        this.selectedPlace = place; 
        this.router.navigate(['EditPlace', { id: place._id }]);
    }
}