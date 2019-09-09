import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})

export class VideoService {
  private _getUrl    = 'http://localhost:3000/api/videos';
  private _postUrl   = 'http://localhost:3000/api/video';
  private _putUrl    = 'http://localhost:3000/api/video/';
  private _deleteUrl = 'http://localhost:3000/api/video/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get<any>(this._getUrl)
  }

  postVideo(video: Video) {
    return this.http.post<any>(this._postUrl, video, this.httpOptions)
  }

  putVideo(video: Video) {
    return this.http.put<any>(this._putUrl + video._id, video, this.httpOptions)
  }

  deleteVideo(video: Video) {
    return this.http.delete<any>(this._putUrl + video._id)
  }
}
