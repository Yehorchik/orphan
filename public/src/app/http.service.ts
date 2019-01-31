import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }


  getAllDonations(){
    return this._http.get('/api/donations');
  }
  getAllStories(){
    return this._http.get('/api/donations/stories');
  }
  createDonation(donation){
    return this._http.post('/api/donations',donation);
  }
}