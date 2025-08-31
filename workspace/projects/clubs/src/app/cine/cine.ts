import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-cine',
  imports: [YouTubePlayer,CommonModule],
  templateUrl: './cine.html',
  styleUrl: './cine.css'
})
export class CINE {

}
