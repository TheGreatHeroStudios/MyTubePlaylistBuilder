import { Component, OnInit } from '@angular/core';
import {Video, VideoViewDetail} from './video-thumbnail/video-thumbnail.component';
import { VideoDataService } from '../video-data.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit
{
  constructor()
  {
  }

  ngOnInit(): void {
  }
}
