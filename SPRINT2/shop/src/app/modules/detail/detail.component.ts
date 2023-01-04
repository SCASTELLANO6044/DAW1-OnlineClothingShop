import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryDto } from 'src/app/dto/category.dto';
import { ProductDto } from 'src/app/dto/product.dto';
import categories from 'src/json/categories.json';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  allCategories: CategoryDto[];
  product: ProductDto;
  category: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.allCategories = categories;
    const id = this.route.snapshot.paramMap.get('id');
    this.category = this.route.snapshot.paramMap.get('category');
    this.product = this.allCategories.find(x => x.name === this.category)?.products.find(x => x.id === Number(id) );
  }
}
