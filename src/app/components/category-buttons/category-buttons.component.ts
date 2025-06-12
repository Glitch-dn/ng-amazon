import { Component, inject, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-buttons',
  imports: [CommonModule],
  templateUrl: './category-buttons.component.html',
  styleUrl: './category-buttons.component.css'
})
export class CategoryButtonsComponent implements OnInit {
  categories: Category[] = [];
  isOffcanvasVisible = false;
  pService: ProductsService = inject(ProductsService);

  ngOnInit(): void {
    this.pService.getCategories()
      .then(data => this.categories = data)
      .catch(error => console.error('Error fetching categories:', error));
  }
  
  toggleOffcanvas(){
    this.isOffcanvasVisible = !this.isOffcanvasVisible;
  }

  selectCategory(event: Event, category: string) {
    event.preventDefault();
    this.pService.selectedCategory = category;
  }
}
