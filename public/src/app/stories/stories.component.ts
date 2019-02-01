import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  users: any = [];
  hello: any;
  like = false;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.allStories();
  }
  allStories() {
    this._httpService.getAllStories().subscribe(result => {
      this.users = result;
      console.log(this.users);
    });
  }
  addLike(id) {
    if (this.like === false) {
      this._httpService.addOneLike(id, this.hello).subscribe(result => {
        this.allStories();
        this.like = true;
      });
    } else {
      this._httpService.removeOneLike(id, this.hello).subscribe(result => {
        this.allStories();
        this.like = false;
      });
    }
  }
}
