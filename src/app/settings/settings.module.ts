// Angular Imports
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// This Module's Components
import { SettingsComponent } from './settings.component';

const settingsRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'settings',
        component: SettingsComponent
    }
]);

@NgModule({
    imports: [
        settingsRouting
    ],
    declarations: [
        SettingsComponent,
    ],
    exports: [
        SettingsComponent,
    ]
})
export class SettingsModule {

}
