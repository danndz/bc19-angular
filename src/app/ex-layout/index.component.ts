import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `
    <app-slider></app-slider>

    <app-index-content></app-index-content>
  `,
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
