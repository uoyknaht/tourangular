import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {IPlace} from '../../app.d';
import {PlaceService} from '../../place.service';

@Component({
    selector: 'placeForm',
    templateUrl: 'app/components/placeForm/placeForm.template.html',
    providers: [PlaceService]    
})

export class PlaceFormComponent {
    public place: IPlace;
    public placeForm: any;
    private emptyPlace: IPlace = {
        _id: 0,
        title: '',
        address: '',
        latitude: 50,
        longitude: 40,

    };

    constructor(
        private router: Router, 
        private routeParams: RouteParams, 
        private placeService: PlaceService) {

        this.resetPlace();
    }

    ngOnInit() {
        let id = this.routeParams.get('id');

        if (id) {
            this.placeService.get(id).then(place => this.place = place);    
        }
    }

    onSubmit() {
     
        this.placeService.add(this.place);
        this.resetPlace();

        this.goToPlacesList();
    }

    goToPlacesList() {
        this.router.navigate(['Places']);
    }

    private resetPlace() {
        this.place = JSON.parse(JSON.stringify(this.emptyPlace));
    }
}