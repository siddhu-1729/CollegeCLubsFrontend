import { Component, HostListener, OnInit } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
@Component({
  selector: 'app-codingclub',
  imports: [YouTubePlayerModule],
  templateUrl: './codingclub.html',
  styleUrl: './codingclub.css'
})
export class Codingclub implements OnInit {
  videowidth!:number;
  videoheight!:number;
  ngOnInit():void{
     this.updateVideoSize(window.innerWidth);
  }
@HostListener('window:resize',['$event'])
   onResize(event:any){
    this.updateVideoSize(event.target.innerwidth);
   }
  private updateVideoSize(width: number) {
    if(width<=640){
      this.videowidth=320;
      this.videoheight=180;
    }
    else {
      this.videoheight=315;
      this.videowidth=560;
    }
}
}
