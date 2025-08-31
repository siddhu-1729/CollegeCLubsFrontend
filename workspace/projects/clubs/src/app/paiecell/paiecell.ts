import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-paiecell',
  imports: [YouTubePlayer,CommonModule],
  templateUrl: './paiecell.html',
  styleUrl: './paiecell.css'
})
export class PAIECELL {

}
