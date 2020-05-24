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

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.cardForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      desc: new FormControl('')
    });
  }

  onSubmit() {
    this.cardForm.value;
    console.log('this.cardForm.value', this.cardForm.value);
    this.bsModalRef.hide();
  }

}
