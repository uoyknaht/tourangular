import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {IPlace} from '../../app.d';
import {PlaceService} from '../../place.service';

@Component({
    selector: 'place',
    //inputs: ['place'],
    templateUrl: 'app/components/place/place.template.html',
    providers: [Router, RouteParams, PlaceService]
})

export class PlaceComponent {
    public place: IPlace;

    constructor(
        private router: Router, 
        private routeParams: RouteParams,
        private placeService: PlaceService) {

    }

    ngOnInit() {
        let id = this.routeParams.get('id');
        this.placeService.get(id).then(place => this.place = place);
    }
}