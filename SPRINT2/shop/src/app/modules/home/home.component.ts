import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CategoryDto } from 'src/app/dto/category.dto';
import { ProductDto } from 'src/app/dto/product.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories: CategoryDto[] = [];
  products: ProductDto[];

  constructor(private http: HttpClient) {
    this.http.get('http://127.0.0.1:3000/categories.json').subscribe((categories: CategoryDto[]) => {
      this.categories = categories
    });
    this.http.get('http://127.0.0.1:3000/products.json').subscribe((products: ProductDto[]) => {
      this.products = products
    });
  }

  getCategoryName(product: ProductDto) {
    const category = this.categories.find((category) => {
      return category.id === product.category_id
    })
    return category.name
  }
}
