import { TestBed } from '@angular/core/testing';

import { GetallCategories } from './getallcategories';

describe('GetallCategories', () => {
  let service: GetallCategories;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetallCategories);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
