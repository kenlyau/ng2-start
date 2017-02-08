import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NoteComponent } from './note.component';
import { NoteListComponent } from './note.list.component';
import { NoteDetailComponent } from './note.detail.component';

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
  declarations: [
    NoteComponent,
    NoteListComponent,
    NoteDetailComponent
  ],
  exports: [
    NoteComponent
  ]
})
export class NoteModule { }
