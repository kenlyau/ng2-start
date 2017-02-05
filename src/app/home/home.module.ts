// Angular Imports
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// This Module's Components
import { HomeComponent } from './home.component';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: HomeComponent
    }
]);

@NgModule({
    imports: [
        homeRouting
    ],
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent,
    ]
})
export class HomeModule {

}
