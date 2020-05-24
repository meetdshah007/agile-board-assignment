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
export class SectionComponent {
  @Input() heading: any;
  cards: any[] = [];

  constructor(
    private modalService: BsModalService,
    private focusService: FocusService
  ) { }

  /**
   * Utility method to trigger Add Card event and show the empty modal on the screen.
   */
  onAdd(): void {
    const initialState = {
      btnTitle: 'Create',
      cardData: null
    };
    this.showModal(initialState);
    this.focusService.setFocus(null);
  }

  /**
   * Utility method to trigger Edit Card event and show modal with filled in data in form.
   * @param card data
   */
  onEdit(card) {
    const initialState = {
      btnTitle: 'Update',
      cardData: card
    };
    this.showModal(initialState);
    this.focusService.setFocus(card.id);
  }

  /**
   * Utility method that presents the modal on the screen.
   * @param initialState data given by onAdd, onEdit methods.
   */
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
