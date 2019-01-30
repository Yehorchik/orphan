import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = false;
  showNav(){
    if(this.show ==false){
      this.show =true;
    }
    else{
      this.show = false
    }
  }
}

