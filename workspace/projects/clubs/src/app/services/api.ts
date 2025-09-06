import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {
     
  private baseUrl = 'http://localhost:8000'; // Replace with your backend URL

  constructor(private http:HttpClient){}

  getClubs() {
    console.log("Clubs has been called");
    return this.http.get(`${this.baseUrl}/clubs/`);
    
  }

}
