import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from './models/products'; // interface



@Injectable({ providedIn: 'root' })


export class ProductService {
  private data: Product[] = [
    { id: 1, name: 'Phone Pro', description: 'Flagship phone', price: 699, category: 'Electronics', stock: 25 },
    { id: 2, name: 'Running Shoes', description: 'Comfortable shoes', price: 120, category: 'Footwear', stock: 40 },
  ];

  private products$ = new BehaviorSubject<Product[]>([...this.data]);

  list(): Observable<Product[]> { return this.products$.asObservable(); }
  add(product: Product) {
    const id = Math.max(0, ...this.data.map(p => p.id || 0)) + 1;
    const newP = { ...product, id };
    this.data.push(newP);
    this.products$.next([...this.data]);
    return of(newP);
  }
  update(updated: Product) {
    const idx = this.data.findIndex(p => p.id === updated.id);
    if (idx > -1) {
      this.data[idx] = { ...updated };
      this.products$.next([...this.data]);
    }
    return of(this.data[idx]);
  }
  delete(id: number) {
    this.data = this.data.filter(p => p.id !== id);
    this.products$.next([...this.data]);
    return of(true);
  }
}
