import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <div class="d-flex">
      <div class="w-25">
        <app-sidebar></app-sidebar>
      </div>
      <div class="w-75">
        <app-content></app-content>
      </div>
    </div>
    <app-footer></app-footer>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
