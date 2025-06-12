import { Component } from '@angular/core';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { CategoryButtonsComponent } from "./components/category-buttons/category-buttons.component";
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-amazon';
}
