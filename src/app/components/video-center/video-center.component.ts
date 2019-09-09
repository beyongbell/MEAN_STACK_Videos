import { Component, OnInit } from '@angular/core';
import { Video } from './../../video';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})

export class VideoCenterComponent implements OnInit {

  videos: Array<Video>;

  selectVideo: Video;

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos().subscribe(response => this.videos = response)
  }

  onSelectVideo(video: any) {
    this.selectVideo = video;
    console.log(this.selectVideo);
  }

}
