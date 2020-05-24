import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FocusService {

  focusEl$: BehaviorSubject<number> = new BehaviorSubject(null);

  constructor() { }

  /**
   * Utility method to inform all the subscriber of changing the focus.
   * @param id uqniue number that will get the focus.
   */
  setFocus(id: number): void {
    this.focusEl$.next(id);
  }
}
