import {Component, Injectable} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {IPlace} from './../../app.d';
import {PlacesListComponent} from '../placesList/placesList.cmp';
import {PlaceFormComponent} from '../placeForm/placeForm.component';
import {PlaceComponent} from '../place/place.component';
import {PlaceService} from '../../place.service';

@Component({
    templateUrl: 'app/components/places/places.template.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', name: 'Places', component: PlacesListComponent, useAsDefault: true},
    { path:'/add', name: 'AddPlace', component: PlaceFormComponent},
    { path:'/:id', name: 'ViewPlace', component: PlaceComponent},
    { path:'/:id/edit', name: 'EditPlace', component: PlaceFormComponent}
])

export class PlacesComponent {
    public title: string;

    constructor(private placeService: PlaceService) {
        this.title = 'Places2345';
        placeService.getAll(false);
    }

}