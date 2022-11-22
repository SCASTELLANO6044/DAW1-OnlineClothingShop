import { Component } from '@angular/core';
import { CategoryDto } from 'src/app/dto/category.dto';
import categories from 'src/json/categories.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allCategories: CategoryDto[];

  constructor() {
    this.allCategories = categories;
  }
}
