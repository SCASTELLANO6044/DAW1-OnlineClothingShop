import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryDto } from 'src/app/dto/category.dto';
import { ProductDto } from 'src/app/dto/product.dto';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  categories: CategoryDto[] = [];
  products: ProductDto[];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:3000/categories.json').subscribe((categories: CategoryDto[]) => {
      this.categories = categories
    });
    this.route.params.subscribe(
      params => {
        const search = params['search'];
        this.http.get(`http://127.0.0.1:3000/search?name=${search}`).subscribe((products: ProductDto[]) => {
          console.log("called")
          this.products = products
        });
      }
    );
  }

  getCategoryName(product: ProductDto) {
    const category = this.categories.find((category) => {
      return category.id === product.category_id
    })
    return category.name
  }
}
