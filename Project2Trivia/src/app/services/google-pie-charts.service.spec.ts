import { TestBed } from '@angular/core/testing';

import { GooglePieChartsService } from './google-pie-charts.service';

describe('GooglePieChartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GooglePieChartsService = TestBed.get(GooglePieChartsService);
    expect(service).toBeTruthy();
  });
});
