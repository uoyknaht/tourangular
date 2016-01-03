import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {IPlace} from '../../app.d';
import {PlaceService} from '../../place.service';

interface IPlaceEditable {
    _id?: string;
    title: string;
    address: string;
    latitude: number;
    longitude: number;
}

@Component({
    selector: 'placeForm',
    templateUrl: 'app/components/placeForm/placeForm.template.html' 
})

export class PlaceFormComponent implements OnInit {
    public place: IPlaceEditable;
    public placeForm: any;
    private emptyPlace: IPlaceEditable = {
        title: '',
        address: '',
        latitude: 50,
        longitude: 40
    };

    constructor(
        private router: Router, 
        private routeParams: RouteParams, 
        private placeService: PlaceService) {
        
    }

    ngOnInit() {
        this.resetPlace();
        let id = this.routeParams.get('id');

        if (id) {
            this.placeService.get(id).then((place: IPlace) => {
                console.log(place);
                console.log('ppp');
                this.place = place
            });    
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