import { Component, OnInit } from '@angular/core';
import { CardType } from 'src/app/shared/models/card-type';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  sections: any[] = [];
  constructor() { }

  ngOnInit() {
    this.sections.push({
      title: 'What went well',
      type: CardType.success
    }, {
      title: 'What can be improved',
      type: CardType.warning
    }, {
      title: 'Start doing',
      type: CardType.info
    }, {
      title: 'Action items',
      type: CardType.primary
    });
  }

}
