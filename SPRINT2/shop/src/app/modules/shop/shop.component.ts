import { Component } from '@angular/core';
import { CategoryDto } from 'src/app/dto/category.dto';
import categories from 'src/json/categories.json';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  allCategories: CategoryDto[];

  constructor() {
    this.allCategories = categories;
  }
}
