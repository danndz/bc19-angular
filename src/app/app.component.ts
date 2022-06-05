import { Component } from '@angular/core';

// Khi có khai báo @Component nghĩa là đây là 1 component của angular
// Angular tách biệt phần template (html) và phần logic (ts) thành 2 phần riêng biệt và được kết nối với nhau thông qua decorator Component
@Component({
  // selector: tên component sẽ được sử dụng trong template(html)
  selector: 'app-root',
  // templateUrl: Kết nối component với phần template(html)
  templateUrl: './app.component.html',
  // styleUrls: kết nối component với phần styles(css/scss)
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bc19-angular';
}
