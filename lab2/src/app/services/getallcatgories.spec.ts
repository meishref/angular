import { TestBed } from '@angular/core/testing';

import { Getallcatgories } from './getallcatgories';

describe('Getallcatgories', () => {
  let service: Getallcatgories;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Getallcatgories);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
