import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { SectionComponent } from './components/section/section.component';
import { CardFormModalComponent } from './components/card-form-modal/card-form-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const components = [
  CardComponent,
  SectionComponent,
  CardFormModalComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  exports: [
    ...components,
    ReactiveFormsModule
  ],
  entryComponents: [
    CardFormModalComponent
  ]
})
export class SharedModule { }
