import { Component } from '@angular/core';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

@Component({
  selector: 'app-root',
  imports: [ProductListComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-amazon';
}
