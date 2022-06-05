import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer bg-secondary text-white text-center">
      <h3>Footer</h3>
    </div>
  `,
  styles: [
    `
      .footer {
        height: 250px;
      }
    `,
  ],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
