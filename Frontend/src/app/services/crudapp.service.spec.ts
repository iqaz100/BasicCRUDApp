import { TestBed } from '@angular/core/testing';

import { CrudappService } from './crudapp.service';

describe('CrudappService', () => {
  let service: CrudappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
