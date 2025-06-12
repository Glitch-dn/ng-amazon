import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './components/home/home.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';

export const routes: Routes = [
    {
        path: "products",
        component: ProductListComponent
    },
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "contacts",
        component: ContattiComponent
    },
    {
        path: "products/:id", //rotta parametrica per l'ID del prodotto
        component: ProductInfoComponent
    }
];
