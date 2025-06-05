import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  stringaRicerca: string = '';
  pService: ProductsService=inject(ProductsService);
  eseguiRicerca() {
    this.pService.aggiornaStringaRicerca(this.stringaRicerca);
  }
}
