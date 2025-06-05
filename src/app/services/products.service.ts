import { Injectable } from '@angular/core';
import { ProductsResponse } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  async getProducts(): Promise<ProductsResponse> {
    const res = await fetch('https://dummyjson.com/products');
    const data:ProductsResponse = await res.json();
    // console.log(data);
    return data;
  }
}
