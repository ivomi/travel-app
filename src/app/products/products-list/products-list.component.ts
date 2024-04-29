import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { ProductModel } from '@app/products/product.model';
import { ProductService } from '@app/products/product.service';
import { ProductsCardComponent } from '@app/products/products-card/products-card.component';

const TYPES = ['All', 'City', 'Country'];

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatProgressBarModule,
    ProductsCardComponent,
  ],
  providers: [ProductService],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  private readonly productService = inject(ProductService);
  protected readonly types = TYPES;

  search?: string;
  type = 'All';

  isLoading = false;
  products: ProductModel[] = [];

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch() {
    this.isLoading = true;
    this.productService.search(this.search, this.type).subscribe(products => {
      this.products = products;
      this.isLoading = false;
    });
  }

  addFavorite(id: number) {
    const product = this.products.find(item => item.id === id);
    if (product) product.isFavorite = true;
  }

  removeFavorite(id: number) {
    const product = this.products.find(item => item.id === id);
    if (product) product.isFavorite = false;
  }
}
