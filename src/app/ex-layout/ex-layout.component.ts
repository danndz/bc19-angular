import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-layout',
  template: `
    <app-header></app-header>

    <app-index></app-index>

    <app-footer></app-footer>
  `
})

export class ExLayoutComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
