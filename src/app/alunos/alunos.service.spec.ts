import { TestBed, inject } from '@angular/core/testing';

import { AlunosService } from './alunos.service';

describe('AlunosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunosService]
    });
  });

  it('should ...', inject([AlunosService], (service: AlunosService) => {
    expect(service).toBeTruthy();
  }));
});
