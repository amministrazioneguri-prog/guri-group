import { TestBed } from '@angular/core/testing';

import { Adminauth } from './adminauth';

describe('Adminauth', () => {
  let service: Adminauth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Adminauth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
