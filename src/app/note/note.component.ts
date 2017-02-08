import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  host: {'class': 'app-container'}
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
