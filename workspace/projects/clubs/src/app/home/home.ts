import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';


@Component({
  selector: 'app-home',
  imports: [RouterModule,CommonModule,YouTubePlayerModule,YouTubePlayer],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home implements OnInit {
  videoWidth!: number;  // default width
  videoHeight!: number; // default height
  ngOnInit() {
    this.updateVideoSize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateVideoSize(event.target.innerWidth);
  }

  private updateVideoSize(width: number) {
    if (width <= 640) {
      this.videoWidth = 320;  // smaller width for mobile
      this.videoHeight = 180; // maintains 16:9 aspect ratio
    } else {
      this.videoWidth = 560;  // larger width for desktop
      this.videoHeight = 315; // maintains 16:9 aspect ratio
    }
  }

    
}
