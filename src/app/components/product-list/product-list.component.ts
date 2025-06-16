import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { CategoryButtonsComponent } from "../category-buttons/category-buttons.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
    this.pService.getProductsObservable()
    .pipe(
      catchError(err => { 

        console.error('Error fetching products:', err);

        // const valoreErrore: ProductsResponse = {limit: 0, skip: 0, total: 0, products: []}; 

        //oppure utilizzo una struttura generica come undefined o un array vuoto adattabile poi nel subscribe con l'operatore ternario o un if
        return of(undefined); // ritorna un observable con valore undefined in caso di errore

      }) // gestione errori, vedi appunti sotto
    ) //gestione errori, vedi appunti sotto
    .subscribe(data => this.products = data ? data.products : []); //vedi appunti sotto

    this.pService.getProductsByCategory(this.pService.selectedCategory);
  }

  filteredProducts(){
    if (this.pService.ricerca !== '') {
      return this.products.filter(p => 
      p.title.toLowerCase().includes(this.pService.ricerca.toLowerCase()) ||
      p.brand?.toLowerCase().includes(this.pService.ricerca.toLowerCase()) ||
      p.category.toLowerCase().includes(this.pService.ricerca.toLowerCase())
      );
    } 
    else if (this.pService.selectedCategory !== '') {
      if( this.pService.selectedCategory === '') {
        return this.products;
      }
      else {
        return this.products.filter(p => p.category === this.pService.selectedCategory);
      }
    }
    else {
      return this.products;
    }
  }
}


// Il metodo subscribe() è una funzione fondamentale nella programmazione reattiva con RxJS, utilizzata per iscriversi a un flusso di dati rappresentato da un Observable. In Angular, questo metodo viene spesso utilizzato per ascoltare eventi, aggiornamenti di dati o risposte asincrone, come quelle provenienti da chiamate HTTP o interazioni con il servizio.

// Quando si chiama subscribe(), si stabilisce una connessione tra il Observable e il codice che deve reagire ai valori emessi. Il metodo accetta fino a tre argomenti opzionali:

//pipe() è un metodo che consente di comporre operatori RxJS per trasformare, filtrare o combinare i dati emessi da un Observable. In questo caso, non sono stati specificati operatori, ma è possibile aggiungerli per manipolare i dati prima di passarli alla funzione di callback.

// observerOrNext: Può essere una funzione che gestisce i valori emessi dal Observable oppure un oggetto Observer che definisce i metodi per gestire i tre tipi di notifiche (next, error, complete).
// error: Una funzione opzionale che viene chiamata se il flusso di dati genera un errore.
// complete: Una funzione opzionale che viene chiamata quando il flusso di dati termina con successo.
// La funzione restituisce un oggetto Subscription, che rappresenta la connessione al flusso di dati. Questo oggetto può essere utilizzato per annullare l'iscrizione al flusso, evitando potenziali problemi di memoria (memory leaks) quando il componente viene distrutto.