import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-iei',
  imports: [YouTubePlayer,CommonModule],
  templateUrl: './iei.html',
  styleUrl: './iei.css'
})
export class IEI {
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
      else{
        this.videoheight=315;
      this.videowidth=560;
      }
    }
}
