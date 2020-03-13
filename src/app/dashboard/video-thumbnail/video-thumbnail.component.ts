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
  url: string;
  title: string;
  artist: string;
  rating: number;
  replays: number;
}
