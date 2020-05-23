import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoardComponent } from './board.component';


@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    SharedModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
