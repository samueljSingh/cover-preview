import { TestBed } from '@angular/core/testing';

import { CoverPreviewService } from './cover-preview.service';

describe('CoverPreviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoverPreviewService = TestBed.get(CoverPreviewService);
    expect(service).toBeTruthy();
  });
});
