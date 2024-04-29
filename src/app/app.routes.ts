import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('@app/homepage/homepage.component').then(m => m.HomepageComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('@app/products/products-list/products-list.component').then(m => m.ProductsListComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('@app/cart/cart/cart.component').then(m => m.CartComponent),
  },
];
