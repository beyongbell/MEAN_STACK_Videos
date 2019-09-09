import { Component, OnInit } from '@angular/core';
import { Video } from './../../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})

export class VideoCenterComponent implements OnInit {

  public videos: Video[] = [
    { "_id": '1', 'title' : 'Title 1', 'url' : 'url 1', 'description' : 'Description 1' },
    { "_id": '2', 'title' : 'Title 2', 'url' : 'url 2', 'description' : 'Description 2' },
    { "_id": '3', 'title' : 'Title 3', 'url' : 'url 3', 'description' : 'Description 3' },
    { "_id": '4', 'title' : 'Title 4', 'url' : 'url 4', 'description' : 'Description 4' },
  ];

  selectVideo: Video;

  constructor() { }

  ngOnInit() {
  }

  onSelectVideo(video: any) {
    this.selectVideo = video;
    console.log(this.selectVideo);
  }

}
