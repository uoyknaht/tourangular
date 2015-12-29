import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './components/app/app.component'
import {DialogService} from './dialog.service'

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    DialogService
]);