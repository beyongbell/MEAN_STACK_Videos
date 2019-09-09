import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VideoCenterComponent } from './components/video-center/video-center.component';
import { HeaderComponent } from './templates/header/header.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { FooterComponent } from './templates/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoCenterComponent,
    HeaderComponent,
    VideoListComponent,
    VideoDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
