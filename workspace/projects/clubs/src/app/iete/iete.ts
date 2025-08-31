import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-iete',
  imports: [YouTubePlayer,CommonModule],
  templateUrl: './iete.html',
  styleUrl: './iete.css'
})
export class IETE {

}
