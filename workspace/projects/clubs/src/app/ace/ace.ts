import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-ace',
  imports: [YouTubePlayer,CommonModule],
  templateUrl: './ace.html',
  styleUrl: './ace.css'
})
export class ACE {
   videowidth!:number;
   videoHeight!:number;
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
      this.videoHeight=180;
      }else{
        this.videoHeight=315;
      this.videowidth=560;
      }
  }
}
