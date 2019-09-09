import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideoCenterComponent } from './components/video-center/video-center.component';


const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'videos', component: VideoCenterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
