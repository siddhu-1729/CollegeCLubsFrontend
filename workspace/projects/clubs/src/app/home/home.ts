import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterModule,CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home implements AfterViewInit {
   ngAfterViewInit(): void {
     
   }
   
}


