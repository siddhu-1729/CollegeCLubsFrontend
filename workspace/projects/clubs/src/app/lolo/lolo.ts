import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-lolo',
  imports: [YouTubePlayer,CommonModule],
  templateUrl: './lolo.html',
  styleUrl: './lolo.css'
})
export class LOLO {
    videowidth!:number;
    videoHeight!:number
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
