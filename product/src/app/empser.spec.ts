import { TestBed } from '@angular/core/testing';

import { Empser } from './empser';

describe('Empser', () => {
  let service: Empser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Empser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
