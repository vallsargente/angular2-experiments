import {Component} from 'angular2/core';
import {RouteConfig, RouterLink, RouterOutlet} from 'angular2/router';
import {QueryDirectiveComponent} from './query-directive/query-directive.component';
import {ViewQueryComponent} from './view-query/view-query.component';
import {ViewChildComponent} from './view-child/view-child.component';
import {ViewChildrenComponent} from './view-children/view-children.component';
import {ContentChildContainerComponent} from './content-child/container.component';
import {ContentChildrenContainerComponent} from './content-children/container.component';
import {InjectComponentElementRefComponent} from './inject-component-element-ref/inject-component-element-ref.component';

@Component({
    templateUrl: 'app/query/query-app.html',
    directives: [RouterLink, RouterOutlet]
})
@RouteConfig([
 { path: '/inject-el', name: 'InjectComponentElementRefComponent', component: InjectComponentElementRefComponent, useAsDefault: true },
 { path: '/directive', name: 'DirectiveQuery', component: QueryDirectiveComponent },
 { path: '/viewquery', name: 'ViewQuery', component: ViewQueryComponent },
 { path: '/viewchild', name: 'ViewChildComponent', component: ViewChildComponent },
 { path: '/viewchildren', name: 'ViewChildrenComponent', component: ViewChildrenComponent },
 { path: '/contentchild', name: 'ContentChildComponent', component: ContentChildContainerComponent },
 { path: '/contentchildren', name: 'ContentChildrenComponent', component: ContentChildrenContainerComponent },
])
export class AngularQueryAppComponent {}