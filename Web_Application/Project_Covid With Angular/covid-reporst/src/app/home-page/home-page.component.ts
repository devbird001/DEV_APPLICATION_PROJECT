import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  UpdateDate:String;
  Source: string;
  Confirmed: number;
  NewConfirmed: number;
  Recovered:number;
  Hospitalized:number;
  Deaths:number; 
 

  constructor(private api:ServiceService) { }

  ngOnInit(): void {
    this.api.getCovidStat().subscribe(
      (respone) => {
      console.log(respone);
      this.UpdateDate = respone['UpdateDate'];
      this.Source = respone['Source'];
      this.Confirmed = this.numberWithCommas(respone['Confirmed']);
      this.NewConfirmed = this.numberWithCommas(respone['NewConfirmed']);
      this.Recovered = this.numberWithCommas(respone['Recovered']);
      this.Hospitalized = this.numberWithCommas(respone['Hospitalized']);
      this.Deaths = this.numberWithCommas(respone['Deaths']);
      }
    );
  }
  numberWithCommas(x){
     return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  refreshPage(){
    window.location.reload();
  }
}
