import { TestBed } from '@angular/core/testing';

import { AuthserService } from './authser.service';

describe('AuthserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthserService = TestBed.get(AuthserService);
    expect(service).toBeTruthy();
  });
});
