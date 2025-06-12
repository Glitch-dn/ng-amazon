import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-info',
  imports: [CommonModule],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent implements OnInit {

  product?: Product;
  pService: ProductsService = inject(ProductsService);
  route: ActivatedRoute = inject(ActivatedRoute); // per accedere ai parametri della rotta

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // recupera l'ID del prodotto dalla rotta, .route restituisce un oggetto ActivatedRoute, .snapshot serve per accedere ai dati della rotta al momento della navigazione, .paramMap è un oggetto che contiene i parametri della rotta, .get('id') recupera il valore del parametro 'id' specificato nell' app.routes.ts
    this.pService.getProductById(id!)
      .then((product: Product) => {
        this.product = product;
      })
      .catch((error: any) => {
        console.error('Errore nel recupero del prodotto:', error);
      });
  }
}
