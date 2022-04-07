import { TestBed } from '@angular/core/testing';

import { ValidateMfTokenService } from './validate-mf-token.service';

describe('ValidateMfTokenService', () => {
  let service: ValidateMfTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateMfTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
