import { TestBed } from '@angular/core/testing';

import { GetNannyDetailsService } from './get-nanny-details.service';

describe('GetNannyDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetNannyDetailsService = TestBed.get(GetNannyDetailsService);
    expect(service).toBeTruthy();
  });
});
