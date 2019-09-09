import { Component, OnInit } from '@angular/core';
import { Video } from './../../video';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: Array<Video>;

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos().subscribe(response => this.videos = response)
  }

}
