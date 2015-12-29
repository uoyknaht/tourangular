import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {IPlace} from '../../app.d';
import {PlaceService} from '../../place.service';

@Component({
    selector: 'placeForm',
    //inputs: ['place'],
    templateUrl: 'app/components/placeForm/placeForm.template.html',
    providers: [PlaceService]    
})

export class PlaceFormComponent {
    public place: IPlace;
    public placeForm: any;

    constructor(private router: Router, private placeService: PlaceService) {
        this.place = {
            id: null,
            title: null
        };
    }

    onSubmit() {
     
        this.placeService.add(this.place);
        this.place = {
            id: null,
            title: null
        };

        this.goToPlacesList();
    }

    goToPlacesList() {
        this.router.navigate(['Places']);
    }
}