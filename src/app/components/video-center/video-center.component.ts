import { Component, OnInit } from '@angular/core';
import { Video } from './../../video';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})

export class VideoCenterComponent implements OnInit {

  videos: Video[];

  selectVideo: Video;

  hiddenNewVideo : boolean = true;

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos().subscribe(response => this.videos = response)
  }

  onSelectVideo(video: any) {
    this.selectVideo = video;
    this.hiddenNewVideo = true;
  }

  onSubmitAddVideo(video: Video) {
    this._videoService.postVideo(video)
    .subscribe((response) => {
        this.videos.push(response)
        this.hiddenNewVideo = true;
        this.selectVideo = response;
    })
  }

  onUpdateVideo(video: Video) {
    this._videoService.putVideo(video)
    .subscribe(response => video = response)
    this.selectVideo = null;
  }

  onDeleteVideo(video: Video) {
    this._videoService.deleteVideo(video)
    .subscribe(response => {
      this.videos = this.videos.filter(function( obj ) {
        return obj._id !== response._id;
      });
      this.selectVideo = null;
    })
  }

  newVideo() {
    this.hiddenNewVideo = false
  }

}
