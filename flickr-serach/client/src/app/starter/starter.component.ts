
import { Component, OnInit } from '@angular/core';
import { FlickrImageService } from '../services/flickr-image.service';

@Component({
  templateUrl: './starter.component.html'
  

})
export class StarterComponent implements OnInit {
  //String array to store all flickr images src urls returned from API side
  flickrImages: any[];
  searchingTag: string;
  constructor(public flickrService:FlickrImageService) {
    
  }

  // Method:  to get all public images
  getFlickrImages() {
    this.flickrImages = [];
    this.flickrService.getFlickrImages(this.searchingTag).subscribe((response) => {
      this.flickrImages = response;
    });
  }

  ngOnInit() {
    //When page loading need to call all public images API with pagination
    //Todo: enable pagination
    this.getFlickrImages();
  }
}
