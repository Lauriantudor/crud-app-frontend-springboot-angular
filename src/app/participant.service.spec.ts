import { TestBed } from '@angular/core/testing';

import { ParticipantService } from './participant.service';

describe('ParicipantService', () => {
  let service: ParticipantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
