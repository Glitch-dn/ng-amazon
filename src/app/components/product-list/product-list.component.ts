import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { CategoryButtonsComponent } from "../category-buttons/category-buttons.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { ProductDetailComponent } from "../product-detail/product-detail.component";

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, CategoryButtonsComponent, SearchBarComponent, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  pService: ProductsService = inject(ProductsService);
  products:Product[] = []; 

  ngOnInit(): void {
    this.pService.getProducts()
    .then(data => this.products = data.products)
    .catch(error => console.error('Error fetching products:', error));
    
  }

  filteredProducts(){
    if(this.pService.ricerca !== ''){
      return this.products.filter(p => p.title.toLowerCase().includes(this.pService.ricerca.toLowerCase()));
    }
    else{
      return this.products;
    }
  }
}
