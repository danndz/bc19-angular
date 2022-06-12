import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  template: `
    <!-- <app-welcome></app-welcome>
    <app-welcome name="Dan Nguyen" [age]="26"></app-welcome>
    <app-welcome name="Quan Pham" [age]="24"></app-welcome>
    <app-welcome [name]="fullName" [age]="age"></app-welcome> -->

    <app-product-list
      [products]="products"
      (onSelect)="handleSelect($event)"
    ></app-product-list>

    <app-product-detail [product]="selectedProduct"></app-product-detail>
  `,
})
export class InteractionComponent implements OnInit {
  // fullName = 'Khai Truong';
  // age = 29;

  products: any[] = [
    {
      id: 1,
      name: 'Iphone 13 Pro Max',
      price: 30000000,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/250261/iphone-13-pro-max-gold-1-600x600.jpg',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S22 Ultra',
      price: 32000000,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/271698/Galaxy-S22-Ultra-Black-600x600.jpg',
    },
    {
      id: 3,
      name: 'Xiami Mi 12',
      price: 25000000,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/242325/xiaomi-mi-12-ultra-1-600x600.jpg',
    },
  ];

  selectedProduct: any = null;

  constructor() {}

  ngOnInit() {}

  handleSelect(product: any) {
    console.log(product);
    this.selectedProduct = product;
  }
}
