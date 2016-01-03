import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
// import { find } from 'lodash/collection';
import {IPlace} from './app.d';

interface IPlacesModel {
    places: IPlace[];
}

interface IPlaceEditable {
    _id?: string;
    title: string;
    address: string;
    latitude: number;
    longitude: number;
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

    get(id: number | string): any {
        return new Promise(resolve => {
            return this.statePromise.then(() => {
                this.placesModel.places.forEach((place: IPlace) => {
                    if (place._id === id) {
                        resolve(place);
                    }
                });
            });
        });
    }    

    add(place: IPlaceEditable) {
        return this.statePromise.then(() => {
            this.http.post('http://localhost:3000/api/places', JSON.stringify(place))
                .map(res => res.json())
                .subscribe((place: IPlace) => {
                    this.placesModel.places.push(place);
                })            
        });
    }
}