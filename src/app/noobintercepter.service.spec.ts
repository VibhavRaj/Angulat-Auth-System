import { TestBed } from '@angular/core/testing';

import { NoobintercepterService } from './noobintercepter.service';

describe('NoobintercepterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoobintercepterService = TestBed.get(NoobintercepterService);
    expect(service).toBeTruthy();
  });
});
