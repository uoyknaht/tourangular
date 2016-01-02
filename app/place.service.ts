import {IPlace} from './app.d';

export class PlaceService {

    places: IPlace[];

    constructor() {
        this.places = PLACES;
    }

    getAll() {
        return this.places;
    }

    get(id: number | string) {
        return placesPromise.then(places => places.filter(h => h._id === +id)[0]);
    }    

    add(place: any) {
        this.places.push(place);
    }
}

var PLACES: IPlace[] = [
    { 
        _id: 11, 
    title: "Mr. Nice" ,
    address: 'aaa',
    latitude: 51,
    longitude: 50
    }

];

var placesPromise = Promise.resolve(PLACES);