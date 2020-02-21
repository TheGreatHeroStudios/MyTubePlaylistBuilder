import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../video-thumbnail/video-thumbnail.component';
import { VideoDataService } from 'src/app/video-data.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit
{
  constructor(public videoDataService: VideoDataService) { }
  ngOnInit(): void { }
}
