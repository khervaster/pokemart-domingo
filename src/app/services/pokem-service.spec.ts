import { TestBed } from '@angular/core/testing';
import { PokemService } from './pokem-service';

describe('PokemService', () => {
  let service: PokemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
