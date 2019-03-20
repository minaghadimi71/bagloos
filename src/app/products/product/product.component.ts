import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  active: boolean = false;
  @Output() add = new EventEmitter<Product>();
  @Output() remove = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddPopulariy() {
    this.product.popularity++;
  }

  onAddCard() {
    this.product.number++;
    this.active = true;
    this.add.emit(this.product);
  }

  onRemoveCard() {
    if (this.product.number !== 0) {
      this.product.number--;
    }
    if (this.product.number === 0) {
      this.active = false;
    }
    this.remove.emit(this.product);
  }
}
