import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-amc',
  imports: [YouTubePlayer,CommonModule],
  templateUrl: './amc.html',
  styleUrl: './amc.css'
})
export class AMC {

}
