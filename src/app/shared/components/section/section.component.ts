import { Component, OnInit, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { CardFormModalComponent } from '../card-form-modal/card-form-modal.component';
import { FocusService } from '../../services/focus.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() heading: any;

  cards: any[] = [];

  constructor(
    private modalService: BsModalService,
    private focusService: FocusService
  ) { }

  ngOnInit() {
  }

  onAdd() {
    const initialState = {
      btnTitle: 'Create',
      cardData: null
    };
    this.showModal(initialState);
    this.focusService.setFocus(null);
  }

  onEdit(card) {
    const initialState = {
      btnTitle: 'Update',
      cardData: card
    };
    this.showModal(initialState);
    this.focusService.setFocus(card.id);
  }

  showModal(initialState) {
    const bsModalRef = this.modalService.show(CardFormModalComponent, { initialState });
    bsModalRef.content.closeBtnName = 'Close';
    const form = bsModalRef.content.cardForm;
    this.modalService.onHide.pipe(
      take(1)
    ).subscribe(resp => {
      if (form.valid && bsModalRef.content.formSubmitted) {
        const value = form.value;
        let index = this.cards.findIndex(c => c.id === value.id);
        if (index === -1) {
          index = this.cards.length;
        }
        this.cards[index] = value;
        this.focusService.setFocus(value.id);
      }
    });
  }
}
