import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import {IPlace} from './app.d';

interface IPlacesModel {
    places: IPlace[];
}


@Injectable()
export class PlaceService {

    placesModel: IPlacesModel = {
        places: []
    };
    private statePromise: any;
    private arePlacesFetched: boolean = false;

    constructor(private http: Http) {
    }

    getAll(shouldForce: boolean): void {

        if (!shouldForce && this.arePlacesFetched) {
            return;
        }

        console.log(555);

        this.statePromise = new Promise<IPlace[]>(resolve =>

            this.http.get('http://localhost:3000/api/places')
                .map(res => res.json())
                .subscribe(places => {
                    this.placesModel.places = places;
                    console.log(this.placesModel.places);
                    this.arePlacesFetched = true;
                    resolve();
                })
        );
    }

    get(id: number | string) {
        return this.statePromise.then(() => this.placesModel.places.filter(h => h._id === +id)[0]);
    }    

    add(place: any) {
        this.placesModel.places.push(place);
    }
}