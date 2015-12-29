import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Injectable} from 'angular2/core'
import {IPlace} from './../../app.d';
import {PlaceService} from '../../place.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/placesList/placesList.tpl.html',
    styles: [`
        .heroes {list-style -type: none; margin-left: 1em; padding: 0; width: 10em;}
          .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
          .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
          .heroes .badge {
            font-size: small;
            color: white;
                padding: 0.1em 0.7em;
                background-color: #369;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -1px;
      }
      .selected { background-color: #EEE; color: #369; }
  `],
    directives: [ROUTER_DIRECTIVES],
    providers: [PlaceService]
})

export class PlacesListComponent {
    public title;
    public places;
    public selectedPlace: IPlace;    

    constructor(private router: Router, private placeService: PlaceService) {
        this.places = placeService.places;
    }

    onSelect(place: IPlace) { 
        this.selectedPlace = place; 
        this.router.navigate(['ViewPlace', { id: place.id }]);
    }
}