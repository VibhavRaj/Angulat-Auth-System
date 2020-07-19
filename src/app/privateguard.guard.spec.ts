import { TestBed, async, inject } from '@angular/core/testing';

import { PrivateguardGuard } from './privateguard.guard';

describe('PrivateguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateguardGuard]
    });
  });

  it('should ...', inject([PrivateguardGuard], (guard: PrivateguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
