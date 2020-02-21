import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Video } from '../video-thumbnail/video-thumbnail.component';
import { VideoDataService } from 'src/app/video-data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls:
  [
    './video-list.component.scss'
  ]
})
export class VideoListComponent implements OnInit
{
  videoListStream: Observable<Video[]>;


  constructor(public videoDataService: VideoDataService)
  {
    this.videoListStream = videoDataService.getVideoData();
  }

  ngOnInit(): void {}
}
