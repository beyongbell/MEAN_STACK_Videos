import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  @Input() video;

  isEditTitle:boolean = false;

  constructor(){}

  ngOnInit() {
  }

  ngOnChanges() {
    this.isEditTitle = false;
  }

}
