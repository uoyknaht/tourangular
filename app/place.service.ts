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
        return placesPromise.then(places => places.filter(h => h.id === +id)[0]);
    }    

    add(place: any) {
        this.places.push(place);
    }
}

var PLACES: IPlace[] = [
    { "id": 11, "title": "Mr. Nice" },
  { "id": 12, "title": "Narco" },
  { "id": 13, "title": "Bombasto" },
  { "id": 14, "title": "Celeritas" },
  { "id": 15, "title": "Magneta" },
  { "id": 16, "title": "RubberMan" },
  { "id": 17, "title": "Dynama" },
  { "id": 18, "title": "Dr IQ" },
  { "id": 19, "title": "Magma" },
  { "id": 20, "title": "Tornadoaaa" }
];

var placesPromise = Promise.resolve(PLACES);