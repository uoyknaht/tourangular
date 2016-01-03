import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import {IPlace} from './app.d';
// import {PlaceDbService} from './placeDb.service;

@Injectable()
export class PlaceService {

    // places: IPlace[];
    places: any;
    //placesPromise = Promise.resolve(PLACES);
    private areFetched: boolean = false;

    constructor(private http: Http) {
        this.places = [];

        if (!this.areFetched) {

        }
    }

    getAll() {
        return this.places;
    }

    getAllDb(): any {
        console.log('start');
        return this.http.get('http://localhost:3000/api/places')
      // Call map on the response observable to get the parsed people object
        .map(res => res.json());
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      // .subscribe(places => this.places = places)

    }

    get(id: number | string) {
       // return this.placesPromise.then(places => places.filter(h => h._id === +id)[0]);
    }    

    add(place: any) {
        this.places.push(place);
    }
}

// var PLACES: IPlace[] = [
//     { 
//         _id: 11, 
//         title: "Mr. Nice" ,
//         address: 'aaa',
//         latitude: 51,
//         longitude: 50
//     }
// ];
