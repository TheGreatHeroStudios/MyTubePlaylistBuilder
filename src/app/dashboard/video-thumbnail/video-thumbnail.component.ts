import { Component, OnInit, Input} from '@angular/core';
import { VideoDataService } from 'src/app/video-data.service';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent implements OnInit 
{
  @Input('videoData') videoData: Video;

  constructor(public videoDataService: VideoDataService) {}
  ngOnInit(): void {}
}


export class Video
{
  title: string;
  author: string;
  id: string;
  viewDetails: VideoViewDetail[];

}

export class VideoViewDetail
{
  age: number;
  region: string;
  date: string;
}
