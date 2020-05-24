import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  sections: string[] = [];
  constructor() { }

  ngOnInit() {
    this.sections.push(
      'What went well',
      'What can be improved',
      'Start doing',
      'Action items'
    );
  }

}
