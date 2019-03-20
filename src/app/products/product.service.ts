import {Injectable} from '@angular/core';
import {Product} from './product';
import {PRODUCTS} from './much-product';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products: Product[] = PRODUCTS;
  constructor() { }
  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
