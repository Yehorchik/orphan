import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  users : any =[];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.allStories();
  
  }
   allStories(){
     this._httpService.getAllStories()
     .subscribe(result =>{
        this.users = result;
        console.log(this.users);
     })
   }
}
