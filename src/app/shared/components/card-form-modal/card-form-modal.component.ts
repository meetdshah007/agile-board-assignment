import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-card-form-modal',
  templateUrl: './card-form-modal.component.html',
  styleUrls: ['./card-form-modal.component.scss']
})
export class CardFormModalComponent implements OnInit {

  // FormGroup member that holds the form and binds the data.
  cardForm: FormGroup;

  // Title used to display correct Headings and button strings.
  btnTitle: string = 'Create';

  // Data to be passed and when given patched to form as a value.
  cardData: any;

  // To know the closing type of the modal.
  formSubmitted: boolean = false;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.cardForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      desc: new FormControl(''),
      id: new FormControl(Date.now())
    });
    if (this.cardData) {
      this.cardForm.patchValue(this.cardData);
      this.cardForm.markAsPristine();
    }
    this.formSubmitted = false;
  }

  /**
   * Method that triggers on clicking the submit or triggering the submit event.
   */
  onSubmit() {
    this.formSubmitted = true;
    this.bsModalRef.hide();
  }

}
