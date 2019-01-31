import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city : any = {
    name: 'Seattle'
  };
  new_city : any ={}
  constructor(private _httpService: HttpService){ }
  ngOnInit() {
     this.searchWeather();
  }

  searchWeather(){
    this._httpService.findWeather(this.city.name)
    .subscribe(data =>{
       this.new_city = data;
       this.new_city.main.temp = Math.floor( this.new_city.main.temp -=273);
       console.log(typeof(data))
       console.log(this.new_city);
    })
  }
 
}
