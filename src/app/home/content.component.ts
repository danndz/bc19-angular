import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <div class="content bg-warning text-white text-center">
      <h3>Content</h3>
    </div>
  `,
  styles: [
    `
      .content {
        height: 500px;
      }
    `,
  ],
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
