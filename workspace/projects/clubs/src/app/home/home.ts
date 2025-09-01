import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';


@Component({
  selector: 'app-home',
  imports: [RouterModule,CommonModule,YouTubePlayerModule,YouTubePlayer],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home implements AfterViewInit {
   ngAfterViewInit(): void {
     
   }
   
}


