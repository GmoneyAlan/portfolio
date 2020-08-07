import { TestBed } from '@angular/core/testing';

import { ChangePageService } from './change-page.service';

describe('ChangePageService', () => {
  let service: ChangePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
