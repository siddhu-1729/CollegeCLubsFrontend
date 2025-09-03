import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-csi',
  imports: [YouTubePlayer,CommonModule],
  templateUrl: './csi.html',
  styleUrl: './csi.css'
})
export class CSI {
    videowidth!:number;
    videoheight!:number
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
      }else{
        this.videoheight=315;
      this.videowidth=560;
      }
    }
}
