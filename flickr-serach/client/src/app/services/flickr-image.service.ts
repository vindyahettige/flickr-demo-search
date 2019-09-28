import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlickrImageService {

  // Define Base URL
  //Todo: add these to environment files, catch errors
  baseUrl = 'http://52.221.239.123:3000';

  constructor(private http: HttpClient) { }

  // To extract data
  private extractData(res: Response) {
      let body = res;
      console.log("Response from API : "+body);
      //If the response is available send it and when it is null sent emapty array.
      return body || [];
    }

  // HttpClient API get() method => Fetch image list from flickr
  getFlickrImages(searchTag): Observable<any> {
    let flickrSearchAPIUrl = this.baseUrl + '/flickr';
    console.log("API url: "+flickrSearchAPIUrl);
    //If search tag is available, need to get public images by tag
    if(searchTag){
      flickrSearchAPIUrl = flickrSearchAPIUrl+"?tag="+searchTag;
    }
    
      return this.http.get<any>(flickrSearchAPIUrl)
      .pipe(
          map(this.extractData)
      );
  
  }
}
