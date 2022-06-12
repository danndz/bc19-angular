import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structutal-directives',
  template: `
    <!-- NgIf: dùng để hiển thị view/template theo điều kiện -->
    <!-- *ngIf="expression" -->
    <!-- expression trả ra true => thẻ h1 được hiển thị ra giao diện -->
    <!-- expression trả ra false => thẻ h1 không được hiển thị ra giao diện -->
    <h1 *ngIf="isVisible">Cybersoft - BC19</h1>
    <button (click)="isVisible = !isVisible">Toggle Visible</button>

    <!-- Xử lý trường hợp if -->
    <!-- Xử lý trường hợp isLoggedIn = true => hiển thị giao diện đã đăng nhập -->
    <div *ngIf="isLoggedIn; else loginTemplate">
      <h3>Welcome back</h3>
      <button (click)="isLoggedIn = false">Logout</button>
    </div>

    <!-- Cách 1: Xử lý trường hợp else bằng cách kiểm tra điều phủ định của trường hợp if -->
    <!-- Xử lý trường hợp isLoggedIn = false => hiển thị giao diện chưa đăng nhập -->
    <!-- <div *ngIf="!isLoggedIn">
      <h3>Please login</h3>
      <button (click)="isLoggedIn = true">Login</button>
    </div> -->

    <!-- Cách 2: Xử lý trường hợp else bằng cách dùng tag ng-template -->
    <!-- Nội dung bên trong tag ng-template mặc định sẽ không được hiển thị ra giao diện, tuy nhiên chúng ta có thể làm nó hiển thị ra bằng cách đặt cho ng-template một template reference variable -->
    <ng-template #loginTemplate>
      <h3>Please login</h3>
      <button (click)="isLoggedIn = true">Login</button>
    </ng-template>

    <!-- NgSwitch -->
    <!-- Dựa vào giá trị hiện tại của biến color, quyết định xem một thẻ p nào sẽ được hiện thị ra giao diện -->
    <div [ngSwitch]="color">
      <p class="bg-primary" *ngSwitchCase="'primary'">Primary</p>
      <p class="bg-secondary" *ngSwitchCase="'secondary'">Secondary</p>
      <p class="bg-success" *ngSwitchCase="'success'">Success</p>
      <p class="bg-warning" *ngSwitchCase="'warning'">Warning</p>
      <p class="bg-danger" *ngSwitchCase="'danger'">Danger</p>
      <p *ngSwitchDefault>Default</p>
    </div>
    <button (click)="changeColor()">Enter your color</button>

    <!-- NgFor -->
    <!-- Local variable có thể được truy xuất đến khi sử dụng ngFor
      index: index của lần lặp hiện tại
      count: số lượng phần tử của mảng
      first: trả ra true nếu đây là phần tử đầu tiên trong mảng
      last: trả ra true nếu đây là phần tử cuối cùng trong mảng
      even: trả ra true nếu đây là phần tử ở index chẵn
      odd: trả ra true nếu đây là phần tử ở index lẻ
    -->
    <p *ngFor="let student of students; index as idx; count as total">
      {{ idx + 1 }}/{{ total }}: {{ student.id }} - {{ student.firstName }}
      {{ student.lastName }} - {{ student.email }}
    </p>

    <!-- Lưu ý: không thể sử dụng nhiều structural directives trên cùng một phần tử -->
    <div *ngFor="let student of students">
      <div *ngIf="student">
        {{ student.firstName }} {{ student.lastName }} - {{ student.email }}
      </div>
    </div>

    <br />
    <br />

    <!-- Nếu không muốn sinh ra một div thừa để đặt directive ta có thể sử dụng 1 tag ng-container -->
    <!-- tag ng-container chỉ hiển thị nội dung bên trong thẻ ra giao diện -->
    <div *ngFor="let student of students">
      <ng-container *ngIf="student">
        {{ student.firstName }} {{ student.lastName }} - {{ student.email }}
      </ng-container>
    </div>
  `,
})
export class StructuralDirectivesComponent implements OnInit {
  isVisible = true;
  isLoggedIn = false; // biến trạng thái dùng để kiểm tra đã đăng nhập hay chưa
  color = 'primary';
  students = [
    {
      id: 'BC19-001',
      firstName: 'Dan',
      lastName: 'Nguyen',
      email: 'dan@gmail.com',
    },
    {
      id: 'BC19-002',
      firstName: 'Quan',
      lastName: 'Pham',
      email: 'quan@gmail.com',
    },
    {
      id: 'BC19-003',
      firstName: 'Hieu',
      lastName: 'Dang',
      email: 'hieu@gmail.com',
    },
  ];

  constructor() {}
  ngOnInit() {}

  changeColor() {
    const color = prompt('Input your color');
    this.color = color as string;
  }
}
