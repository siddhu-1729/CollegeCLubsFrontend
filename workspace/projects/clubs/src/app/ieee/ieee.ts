import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-ieee',
  imports: [YouTubePlayer,CommonModule],
  templateUrl: './ieee.html',
  styleUrl: './ieee.css'
})
export class IEEE {

}
