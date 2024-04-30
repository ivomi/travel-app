import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  protected readonly productService = inject(ProductService);
  protected readonly types = signal(TYPES);
  protected destroyRef = inject(DestroyRef);

  search = signal<string | null>(null);
  type = signal('All');

  isLoading = signal(false);
  products = signal<ProductModel[]>([]);

  title = signal('Title');
  prettySearch = computed(() => {
    return `Query: ${this.search()} and type: ${this.type()}`;
  });
  selected = signal(0);

  prettyDate = toSignal(this.productService.search(''));

  constructor() {
    effect(() => {
      console.log(this.selected());
    });
    effect(
      () => {
        console.log(this.search());
        if (this.search()?.startsWith('vi')) {
          this.type.set('City');
        }
      },
      { allowSignalWrites: true }
    );
  }

  ngOnInit(): void {
    this.onSearch();
    setTimeout(() => {
      this.title.update(value => value + 'NEW TITLE');
    }, 1500);
  }

  onSearch() {
    this.isLoading.set(true);
    this.productService.search(this.search(), this.type()).subscribe(products => {
      this.products.set(products);
      this.isLoading.set(false);
    });
  }

  addFavorite(id: number) {
    const product = this.products().find(item => item.id === id);
    if (product) product.isFavorite = true;
  }

  removeFavorite(id: number) {
    const product = this.products().find(item => item.id === id);
    if (product) product.isFavorite = false;
  }
}
