import { Injectable } from '@angular/core';
import { ProductsResponse } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  ricerca: string = '';

  constructor() { }

  async getProducts(): Promise<ProductsResponse> {
    const res = await fetch('https://dummyjson.com/products');
    const data:ProductsResponse = await res.json();
    // console.log(data);
    return data;
  }

  aggiornaStringaRicerca(r: string){
    console.log('Ricerca aggiornata:', r);
    
    this.ricerca = r;
  }
}
