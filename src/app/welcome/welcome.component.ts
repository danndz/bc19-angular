// Snippet để tạo component: a-component, a-component-inline
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  // templateUrl: './welcome.component.html',
  // styleUrls: ['./welcome.component.scss'],
  template: ` <h1 class="title">Welcome to BC19</h1> `,
  styles: [
    `
      .title {
        color: blue;
      }
    `,
  ],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
