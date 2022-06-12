import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-products',
  template: `
    <div class="container">
      <div class="card">
        <div class="card-header bg-dark text-white">
          Quản lý danh mục sản phẩm
        </div>
        <div class="card-body">
          <!-- Mã sản phẩm -->
          <div class="mb-3">
            <label for="category" class="form-label">Mã sản phẩm</label>
            <input
              type="text"
              id="category"
              class="form-control"
              [(ngModel)]="product.category"
            />
          </div>
          <!-- Tên sản phẩm -->
          <div class="mb-3">
            <label for="name" class="form-label">Tên sản phẩm</label>
            <input
              type="text"
              id="name"
              class="form-control"
              [(ngModel)]="product.name"
            />
          </div>
          <!-- Giá sản phẩm -->
          <div class="mb-3">
            <label for="price" class="form-label">Giá</label>
            <input
              type="text"
              id="price"
              class="form-control"
              [(ngModel)]="product.price"
            />
          </div>

          <button class="btn btn-success" (click)="handleAddProduct()">
            Thêm sản phẩm
          </button>
        </div>
      </div>

      <table class="table mt-4">
        <thead class="bg-dark text-white">
          <tr>
            <th>STT</th>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          <tr
            *ngFor="let product of products; index as idx; even as isEven"
            [class.bg-secondary]="isEven"
          >
            <td>{{ idx + 1 }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class ExProductsComponent implements OnInit {
  // products: danh sách sản phẩm
  products: Product[] = [];

  // product: quản lý input
  product: Product = {
    category: '',
    name: '',
    price: '',
  };

  constructor() {}

  ngOnInit() {}

  handleAddProduct() {
    this.products.push({ ...this.product });
  }
}

interface Product {
  category: string;
  name: string;
  price: string;
}
