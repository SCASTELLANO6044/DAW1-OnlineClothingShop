import { Component } from '@angular/core';
import categories from 'src/json/categories.json';
import { CategoryDto } from './dto/category.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  allCategories: CategoryDto[];

  constructor() {
    this.allCategories = categories;
  }
}
