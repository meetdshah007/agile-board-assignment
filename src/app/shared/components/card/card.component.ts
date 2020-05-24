import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FocusService } from '../../services/focus.service';
import { CardType } from '../../models/card-type';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() data: any;
  @Input() cardType: number;
  destroy$: Subject<void> = new Subject();
  applyFocus: boolean = false;
  cardCls: string;

  constructor(
    public focusService: FocusService
  ) { }

  ngOnInit() {
    this.applyClassType()
    this.focusService.focusEl$
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(activeFocus => {
        this.applyFocus = this.data && this.data.id && this.data.id === activeFocus;
        this.applyClassType();
      });
  }

  applyClassType() {
    let cardClass = '';
    let cardActiveClass = '';
    switch (this.cardType) {
      case CardType.info:
        cardClass = 'border-info text-info';
        cardActiveClass = 'bg-info text-white';
        break;
      case CardType.warning:
        cardClass = 'border-warning text-warning';
        cardActiveClass = 'bg-warning text-white';
        break;
      case CardType.success:
        cardClass = 'border-success text-success';
        cardActiveClass = 'bg-success text-white';
        break;
      case CardType.primary:
        cardClass = 'border-primary text-primary';
        cardActiveClass = 'bg-primary text-white';
        break;
    }
    this.cardCls = cardClass;
    if (this.applyFocus) {
      this.cardCls = cardActiveClass;
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
