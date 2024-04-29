import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() product?: ProductModel;
  @Output() addFavorite = new EventEmitter<number>();
  @Output() removeFavorite = new EventEmitter<number>();
}
