import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class CrudappService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl + "offers/");
  }

  getOffersByCategory(id: number){
    return this.http.get(baseUrl + "offerswithcategory/" + id)
  }

}
