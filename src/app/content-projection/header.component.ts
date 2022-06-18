import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">
          <!-- Kiếm nội dung bên trong cặp thẻ đóng mở của component app-header, thẻ có attribute là brand và lấy nội dung của thẻ đó thế nào vị trí của ng-content này -->
          <ng-content select="[brand]"></ng-content>
        </span>

        <div class="d-flex">
          <!-- Kiếm nội dung bên trong cặp thẻ đóng mở của component app-header, thẻ có attribute là menu và lấy nội dung của thẻ đó thế nào vị trí của ng-content này -->
          <ng-content select="[menu]"></ng-content>
        </div>
      </div>
    </nav>
  `,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
