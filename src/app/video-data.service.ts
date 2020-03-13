import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Video } from './dashboard/video-thumbnail/video-thumbnail.component';

@Injectable
(
  {
    providedIn: 'root'
  }
)
export class VideoDataService
{
  //TODO: Re-add HttpClient once a back-end service has been stood up
  //httpClient: HttpClient;
  sampleVideos: Video[] =
  [
    {
      title: 'Burning Man',
      artist: 'Watt (featuring Post Malone)',
      url: 'watch?v=Zo0LzLRmod4',
      rating: 0,
      replays: 0
    },
    {
      title: 'Play With Fire',
      artist: 'Sam Tinnesz (featuring Yacht Money)',
      url: 'watch?v=yzVQkO92wNw',
      rating: 0,
      replays: 0
    },
    {
      title: 'River',
      artist: 'Eminem (featuring Ed Sheeran)',
      url: 'watch?v=mDuElaL1dU0',
      rating: 0,
      replays: 0
    },
    {
      title: 'Let Me Down Slowly',
      artist: 'Alec Benjamin',
      url: 'watch?v=jLNrvmXboj8',
      rating: 0,
      replays: 0
    },
    {
      title: 'Love Lies',
      artist: 'Khalid',
      url: 'watch?v=c4a-ke6u_eQ',
      rating: 0,
      replays: 0
    },
    {
      title: 'Partners in Crime',
      artist: 'Set it Off (featuring Ash Costello)',
      url: 'watch?v=VwpudWRx7eg',
      rating: 0,
      replays: 0
    },
    {
      title: 'If We Have Each Other',
      artist: 'Alec Benjamin',
      url: 'watch?v=D9F50YtFejo',
      rating: 0,
      replays: 0
    }
  ];


  currentVideoSubject: BehaviorSubject<Video> = new BehaviorSubject<Video>(null);


  constructor(/*httpClient: HttpClient*/)
  {
    //this.httpClient = httpClient;
  }


  getVideoData(): Observable<Video[]>
  {
    console.log('Getting Video Data...');
    return of(this.sampleVideos);
    //return this.httpClient.get<Video[]>('http://api.angularbootcamp.com/videos');
  }
}
