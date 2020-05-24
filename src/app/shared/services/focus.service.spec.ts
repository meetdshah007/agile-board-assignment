import { TestBed } from '@angular/core/testing';

import { FocusService } from './focus.service';

describe('FocusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FocusService = TestBed.get(FocusService);
    expect(service).toBeTruthy();
  });
});
