import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  template: `
    <div *ngIf="product" class="container">
      <div class="row">
        <div class="col-sm-6">
          <img [src]="product.image" />
        </div>
        <div class="col-sm-6">
          <h1>{{ product.name }}</h1>
          <p>Price: {{ product.price }}</p>
        </div>
      </div>
    </div>
  `,
})
export class ProductDetailComponent implements OnInit {
  @Input() product: any = null;

  constructor() {}

  ngOnInit() {}
}
