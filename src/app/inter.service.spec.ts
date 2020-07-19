import { TestBed } from '@angular/core/testing';

import { InterService } from './inter.service';

describe('InterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterService = TestBed.get(InterService);
    expect(service).toBeTruthy();
  });
});
