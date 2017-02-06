import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NoteComponent } from './note.component';

const noteRouting: ModuleWithProviders = RouterModule.forChild([
    {
       'path': 'note/:type/:id',
       'component': NoteComponent
    },
    {
       'path': 'note',
       'redirectTo': '/note/f/0',
       'pathMatch': 'full'
    }
]);

@NgModule({
  imports: [
    CommonModule,
    noteRouting
  ],
  declarations: [NoteComponent],
  exports: [
    NoteComponent
  ]
})
export class NoteModule { }
