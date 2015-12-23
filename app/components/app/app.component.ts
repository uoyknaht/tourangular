import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Injectable} from 'angular2/core'
import {IPlace} from './../../app.d';
import {PlaceComponent} from '../place/place.component';
import {PlaceFormComponent} from '../placeForm/placeForm.component';
import {PlacesComponent} from '../places/places.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app/app.template.html',
    directives: [ROUTER_DIRECTIVES, PlacesComponent]
})

@RouteConfig([
    { path: '/places', name: 'Places', component: PlacesComponent, useAsDefault: true},
    { path:'/places/add', name: 'AddPlace', component: PlaceFormComponent},
    { path:'/places/:id', name: 'ViewPlace', component: PlaceComponent}
])

export class AppComponent {

}