import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Injectable} from 'angular2/core'
import {IPlace} from './../../app.d';
import {PlaceService} from '../../place.service';

@Component({
    templateUrl: 'app/components/placesList/placesList.tpl.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [PlaceService]
})

export class PlacesListComponent {
    public title: string;
    public places: IPlace[];
    public selectedPlace: IPlace;    

    constructor(private router: Router, private placeService: PlaceService) {
this.places = this.placeService.places;
        var _this = this;
console.log('begin3');
        this.placeService.getAllDb().subscribe((places: IPlace[]) => {
          console.log(places);
          _this.places = places;
      })        
    }

    ngOnInit() {



    }    

    onSelect(place: IPlace) { 
        this.selectedPlace = place; 
        this.router.navigate(['ViewPlace', { id: place._id }]);
    }
}