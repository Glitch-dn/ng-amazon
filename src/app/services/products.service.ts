import { Injectable } from '@angular/core';
import { ProductsResponse } from '../models/product';
import { CategoryResponse } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  ricerca: string = '';

  constructor() { }

  async getProducts(): Promise<ProductsResponse> {
    const res = await fetch('https://dummyjson.com/products');
    const data:ProductsResponse = await res.json();
    return data;
  }

  async searchProducts(q: string){
    const res = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(q)}`);
    const data:ProductsResponse = await res.json();
    return data;
  }

   async getCategories(): Promise<CategoryResponse>{
    const res = await fetch('https://dummyjson.com/products/categories');
    const data:CategoryResponse = await res.json();
    return data;
   }

  aggiornaStringaRicerca(r: string){
    console.log('Ricerca aggiornata:', r);
    
    this.ricerca = r;
  }
}
