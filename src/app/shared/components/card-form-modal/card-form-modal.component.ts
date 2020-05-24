import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-card-form-modal',
  templateUrl: './card-form-modal.component.html',
  styleUrls: ['./card-form-modal.component.scss']
})
export class CardFormModalComponent implements OnInit {

  cardForm: FormGroup;
  btnTitle: string = 'Create';
  cardData: any;
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

  onSubmit() {
    this.formSubmitted = true;
    this.bsModalRef.hide();
  }

}
