import { NgOptimizedImage } from '@angular/common';
import { Component, input, model, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductModel } from '@app/products/product.model';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [NgOptimizedImage, MatButtonModule, MatCardModule],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.scss',
})
export class ProductsCardComponent {
  product = input.required<ProductModel>();
  selected = model<number>();
  addFavorite = output<number>();
  removeFavorite = output<number>();
}
