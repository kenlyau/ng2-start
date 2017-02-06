import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NoteModule } from './note/note.module';
import { SettingsModule } from './settings/settings.module';

import {
   HeaderComponent,
   FooterComponent
 } from './shared/layout/';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: true});

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    NoteModule,
    SettingsModule,
    rootRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
