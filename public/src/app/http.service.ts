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
  addOneLike(id,hello){
    return this._http.put('/api/donations/'+id,hello);
  } 
  removeOneLike(id,hello){
    return this._http.put('/api/donations/remove/'+id,hello)
  }
  findWeather(city){
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=90da99e4ec8202561ec8ac9db4c3e4d0`);
  }
}
