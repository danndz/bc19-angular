import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { ToggleComponent } from './toggle.component';

@Component({
  selector: 'app-interaction',
  template: `
    <!-- <app-welcome></app-welcome>
    <app-welcome name="Dan Nguyen" [age]="26"></app-welcome>
    <app-welcome name="Quan Pham" [age]="24"></app-welcome>
    <app-welcome [name]="fullName" [age]="age"></app-welcome> -->

    <!-- <app-product-list
      [products]="products"
      (onSelect)="handleSelect($event)"
    ></app-product-list>

    <app-product-detail [product]="selectedProduct"></app-product-detail> -->

    <!-- <input [value]="name" (input)="handleChange($event)" /> -->
    <!-- <input [(ngModel)]="name" /> -->

    <!-- <app-toggle
      [checked]="checked"
      (checkedChange)="handleToggle($event)"
    ></app-toggle> -->
    <!-- Custom two-way binding -->
    <!-- <app-toggle [(checked)]="checked"></app-toggle> -->

    <!-- viewchild -->
    <!-- Kĩ thuật cho phép component cha có thể truy cập tới các thuộc tính và phương thức của component con trực tiếp ngay tại component cha -->
    <!-- <app-toggle #toggleComp></app-toggle>
    <br />
    <br />
    <button class="btn btn-success" (click)="toggleComp.toggle()">
      Toggle in template
    </button>
    <button class="btn btn-warning" (click)="handleToggleInside()">
      Toggle in class
    </button> -->

    <!-- ViewChildren -->
    <app-toggle></app-toggle>
    <app-toggle></app-toggle>
    <app-toggle></app-toggle>
    <br />
    <br />
    <button class="btn btn-warning" (click)="handleToggleAll()">
      Toggle All
    </button>
  `,
})
export class InteractionComponent implements OnInit {
  // toggleComp! - Non-null assertion operator: có nghĩa là khai báo biến này sẽ không được phép null
  @ViewChild('toggleComp') toggleComp!: ToggleComponent;

  @ViewChildren(ToggleComponent) toggleComps!: QueryList<ToggleComponent>;

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
  checked = true;

  constructor() {}
  ngOnInit() {}

  handleSelect(product: any) {
    console.log(product);
    this.selectedProduct = product;
  }

  handleToggle(checked: boolean) {
    this.checked = checked;
  }

  handleToggleInside() {
    this.toggleComp.toggle();
  }

  handleToggleAll() {
    this.toggleComps.forEach((item: ToggleComponent) => {
      item.toggle();
    });
  }
}
