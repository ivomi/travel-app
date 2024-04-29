import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

const SECTIONS = [
  {
    href: 'products',
    name: 'Products',
  },
  {
    href: 'cart',
    name: 'Cart',
  },
];

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, RouterLink, RouterLinkActive, NgTemplateOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavBarComponent {
  title = 'TRAVELS';
  sections = SECTIONS;
}
