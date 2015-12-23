import {Component} from 'angular2/core';
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

    constructor(private placeService: PlaceService) {
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
    }
}