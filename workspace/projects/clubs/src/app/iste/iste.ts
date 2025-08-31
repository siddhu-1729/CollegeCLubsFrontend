import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-iste',
  imports: [YouTubePlayer,CommonModule],
  templateUrl: './iste.html',
  styleUrl: './iste.css'
})
export class ISTE {

}
