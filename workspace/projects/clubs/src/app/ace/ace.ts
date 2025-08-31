import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-ace',
  imports: [YouTubePlayer,CommonModule],
  templateUrl: './ace.html',
  styleUrl: './ace.css'
})
export class ACE {

}
