import { TestBed } from '@angular/core/testing';

import { PauthService } from './pauth.service';

describe('PauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PauthService = TestBed.get(PauthService);
    expect(service).toBeTruthy();
  });
});
