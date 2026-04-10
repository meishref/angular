import { TestBed } from '@angular/core/testing';

import { Apiproduct } from './apiproduct';

describe('Apiproduct', () => {
  let service: Apiproduct;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apiproduct);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
