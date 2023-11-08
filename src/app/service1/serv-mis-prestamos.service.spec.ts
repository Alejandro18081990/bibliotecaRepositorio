import { TestBed } from '@angular/core/testing';

import { ServMisPrestamosService } from './serv-mis-prestamos.service';

describe('ServMisPrestamosService', () => {
  let service: ServMisPrestamosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServMisPrestamosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
