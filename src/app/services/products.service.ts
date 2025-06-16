import { inject, Injectable } from '@angular/core';
import { Product, ProductsResponse } from '../models/product';
import { CategoryResponse } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  ricerca: string = '';
  selectedCategory: string = '';
  http: HttpClient = inject(HttpClient);

  constructor() { }

  async getProducts(): Promise<ProductsResponse> { 
     const res = await fetch('https://dummyjson.com/products');
     const data:ProductsResponse = await res.json();
     return data;
    
  }
  getProductsObservable(): Observable<ProductsResponse> { //pattern di programmazione pub-sub o publisher-subscriber vedi sotto, con observables non posso fare async
    return this.http.get<ProductsResponse>('https://dummyjson.com/products')
  }

  async getProductById(id:string): Promise<Product> {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data:Product = await res.json();
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

   async getProductsByCategory(category: string): Promise<ProductsResponse> {
    const res = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data:ProductsResponse = await res.json();
    return data;
  }

  aggiornaStringaRicerca(r: string){
    this.ricerca = r;
  }

}


// Il pattern di programmazione pub-sub (publisher-subscriber) è un modello architetturale utilizzato per gestire la comunicazione tra componenti di un'applicazione in modo decoupled, ovvero senza che i componenti siano direttamente dipendenti l'uno dall'altro. Questo approccio è particolarmente utile in applicazioni complesse, come quelle sviluppate con Angular, dove è necessario mantenere la modularità e ridurre le dipendenze dirette tra i vari servizi, componenti e moduli.

// Nel pattern pub-sub, ci sono due ruoli principali:

// Publisher: È il componente che genera e invia eventi o messaggi. Il publisher non ha conoscenza diretta dei subscriber che riceveranno i suoi messaggi. Questo garantisce che il publisher possa funzionare indipendentemente dai subscriber.

// Subscriber: È il componente che si iscrive a determinati eventi o messaggi generati dal publisher. Quando un evento viene pubblicato, il subscriber riceve una notifica e può eseguire azioni specifiche in risposta.

// In TypeScript e Angular, il pattern pub-sub viene spesso implementato utilizzando RxJS, una libreria per la programmazione reattiva. RxJS fornisce strumenti come Subject, BehaviorSubject e Observable, che permettono di creare flussi di dati e gestire la comunicazione tra publisher e subscriber. Ad esempio, un servizio Angular può fungere da publisher, mentre i componenti che si iscrivono agli Observable del servizio agiscono come subscriber.