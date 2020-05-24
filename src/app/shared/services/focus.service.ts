import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FocusService {

  focusEl$: BehaviorSubject<number> = new BehaviorSubject(null);

  constructor() { }

  setFocus(id) {
    this.focusEl$.next(id);
  }
}
