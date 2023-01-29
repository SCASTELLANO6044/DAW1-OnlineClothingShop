import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryDto } from 'src/app/dto/category.dto';
import { ProductDto } from 'src/app/dto/product.dto';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  categories: CategoryDto[];
  product: ProductDto;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get('http://127.0.0.1:3000/categories.json').subscribe((categories: CategoryDto[]) => {
      this.categories = categories
    });
    this.http.get(`http://127.0.0.1:3000/products/${id}.json`).subscribe((product: ProductDto) => {
      this.product = product
    });
  }

  getCategoryName() {
    const category = this.categories.find((category) => {
      return category.id === this.product.category_id
    })
    return category.name
  }
}
