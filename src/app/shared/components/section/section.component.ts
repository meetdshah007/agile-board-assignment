import { Component, OnInit, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { CardFormModalComponent } from '../card-form-modal/card-form-modal.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() heading: string = 'Heading';

  cards: any[] = [];

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  onAdd() {
    console.log('Add new card');


    const initialState = {
      btnTitle: 'Create',
      title: 'Modal with component'
    };
    const bsModalRef = this.modalService.show(CardFormModalComponent, { initialState });
    bsModalRef.content.closeBtnName = 'Close';
    this.modalService.onHide.pipe(
      take(1)
    ).subscribe(resp => {
      console.log('resp', resp);
      this.cards.push({
        name: `Card ${(this.cards.length + 1)}`
      });
    });
  }

}
