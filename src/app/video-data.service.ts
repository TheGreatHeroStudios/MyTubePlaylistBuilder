import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Video } from './dashboard/video-thumbnail/video-thumbnail.component';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService
{
  httpClient: HttpClient;
  currentVideoSubject: BehaviorSubject<Video> = new BehaviorSubject<Video>(null);


  constructor(httpClient: HttpClient)
  {
    this.httpClient = httpClient;
  }


  getVideoData(): Observable<Video[]>
  {
    console.log("Getting Video Data...");
    return this.httpClient.get<Video[]>('http://api.angularbootcamp.com/videos');
  }
}
