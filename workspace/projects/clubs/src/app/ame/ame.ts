import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-ame',
  imports: [YouTubePlayer,CommonModule],
  templateUrl: './ame.html',
  styleUrl: './ame.css'
})
export class AME {

}
