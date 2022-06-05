import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="sidebar bg-success text-white text-center">
      <h3>Sidebar</h3>
    </div>
  `,
  styles: [
    `
      .sidebar {
        height: 500px;
      }
    `
  ]
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
