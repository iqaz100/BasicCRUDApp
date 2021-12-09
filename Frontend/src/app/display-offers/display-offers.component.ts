import { Component, OnInit } from '@angular/core';
import { CrudappService } from '../services/crudapp.service';

@Component({
  selector: 'app-display-offers',
  templateUrl: './display-offers.component.html',
  styleUrls: ['./display-offers.component.css']
})
export class DisplayOffersComponent implements OnInit {

  offers: any;
  currentOffer = null;
  title = '';

  constructor(private crudAppService: CrudappService) { }

  ngOnInit() {
    this.retrieveOffers();
  }

  retrieveOffers(){
    this.crudAppService.getAll().subscribe(data => {this.offers = data; console.log(data);}, error => {console.log(error)});
  }

}
