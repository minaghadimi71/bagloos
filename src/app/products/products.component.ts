import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  t: number = 0;
  allPrice: number = 0;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.onGetProducts();
  }
  onGetProducts() {
    this.productService.getProducts().subscribe(prts => this.products = prts);
  }
  onAdded(product: Product) {
    this.t++;
    this.allPrice += product.price;
  }

  onRemoved(product: Product) {
    this.t--;
    this.allPrice -= product.price;
  }
}
