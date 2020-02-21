import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

import {MatCardModule} from '@angular/material/card';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';


@NgModule({
  declarations: [DashboardComponent, VideoListComponent, StatFiltersComponent, VideoPlayerComponent, VideoThumbnailComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule
  ]
})
export class DashboardModule { }
