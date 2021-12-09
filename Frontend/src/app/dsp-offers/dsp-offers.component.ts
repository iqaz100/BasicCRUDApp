import { Component, OnInit } from '@angular/core';
import { CrudappService } from '../services/crudapp.service';


@Component({
  selector: 'app-dsp-offers',
  templateUrl: './dsp-offers.component.html',
  styleUrls: ['./dsp-offers.component.css']
})
export class DspOffersComponent implements OnInit {

  offers: any;
  currentOffer: any;
  currentIndex = -1;
  title = '';
  category_id: any;


  constructor(private crudAppService: CrudappService) { }

  ngOnInit() {
    this.retrieveOffers();
    //this.retrieveOffersbyCategory(4);
  }

  retrieveOffers(){
    this.crudAppService.getAll().subscribe(data => {this.offers = data; console.log(data);}, error => {console.log(error)});
  }

  retrieveOffersbyCategory(){
    if(this.category_id != null){
      this.crudAppService.getOffersByCategory(this.category_id).subscribe(data => {this.offers = data; console.log(data);}, error => {console.log(error)});
    }
  }

  setActiveOffer(offer: null,index: number){
    this.currentOffer = offer;
    this.currentIndex = index;
  }
}
