import { TestBed } from '@angular/core/testing';

import { FlickrImageService } from './flickr-image.service';

describe('FlickrImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlickrImageService = TestBed.get(FlickrImageService);
    expect(service).toBeTruthy();
  });
});
