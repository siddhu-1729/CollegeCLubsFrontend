import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-iei',
  imports: [YouTubePlayer,CommonModule],
  templateUrl: './iei.html',
  styleUrl: './iei.css'
})
export class IEI {

}
