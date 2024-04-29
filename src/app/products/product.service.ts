import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProductModel } from '@app/products/product.model';
import { environment } from '@env/environment';
import { Observable, delay, map } from 'rxjs';

@Injectable()
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly url = environment.apiUrl;

  search(title?: string, type?: string): Observable<ProductModel[]> {
    return this.http.get<{ items: ProductModel[] }>(`${this.url}/data.json`).pipe(
      delay(1000),
      map(data => data.items),
      map(items => (title ? items.filter(item => item.title.toLowerCase().includes(title.toLowerCase())) : items)),
      map(items => (type && type !== 'All' ? items.filter(item => item.typeId === type) : items))
    );
  }
}
