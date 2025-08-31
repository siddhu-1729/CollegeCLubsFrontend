import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-csi',
  imports: [YouTubePlayer,CommonModule],
  templateUrl: './csi.html',
  styleUrl: './csi.css'
})
export class CSI {

}
