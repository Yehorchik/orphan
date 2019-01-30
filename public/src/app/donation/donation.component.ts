import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  show = false;
  card_holder :any ={
    first_name : "",
    last_name : "",
    card_number : "",
    exp_date : "",
    sec_code : "",
    billing_adress : "",
  };
  createErrors : any ={
    
  };
  user : any ={
    first_name : '',
    last_name : "",
    email : "",
    donation : 0,
    comment : "",
    card : {
      card_first_name : "",
      card_last_name : "",
      card_number : 0,
      expiration_date : "",
      security_code :0 ,
      billing_adress :""
    }
  }
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    console.log(this.user.card.card_first_name);
  }
  
  sendDonation(){
    this._httpService.createDonation(this.user)
    .subscribe(result =>{
      if(result['errors']){
        this.createErrors = result;
        console.log(this.createErrors)
      }
    })
    this.user ={
      first_name : '',
      last_name : "",
      email : "",
      donation : 0,
      comment : "",
      card : {
        card_first_name : "",
        card_last_name : "",
        card_number : 0,
        expiration_date : "",
        security_code :0 ,
        billing_adress :""
      }
    }
    this.createErrors = "";
  }

  openhelp(){
    if(this.show ==false){
      this.show =true;
    }
    else{
      this.show = false
    }
    console.log(this.show);
  }
}
