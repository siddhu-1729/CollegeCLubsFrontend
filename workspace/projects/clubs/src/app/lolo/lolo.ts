import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-lolo',
  imports: [YouTubePlayer,CommonModule],
  templateUrl: './lolo.html',
  styleUrl: './lolo.css'
})
export class LOLO {

}
