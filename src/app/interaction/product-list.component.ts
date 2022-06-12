import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-4" *ngFor="let product of products">
          <div class="card">
            <img [src]="product.image" class="card-img" />
            <div class="card-body">
              <h3 class="card-title">{{ product.name }}</h3>
              <p class="card-text">{{ product.price }}</p>
              <button class="btn btn-success" (click)="handleSelect(product)">Chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ProductListComponent implements OnInit {
  @Input() products: any[] = [];
  // EventEmitter: một lớp đối tượng để khởi tạo ra một đối tượng custom event
  @Output() onSelect = new EventEmitter()
  constructor() {}

  ngOnInit() {}

  handleSelect(product: any) {
    // Làm sao để truyền sản phẩm vừa chọn lên component cha
    // emit là hàm dùng để trigger event và truyền data vào event
    this.onSelect.emit(product)
  }
}







