import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header bg-primary text-white text-center">
      <h3>Header</h3>
    </div>
  `,
  styles: [
    `
      .header {
        width: 100%;
        height: 250px;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
