import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  template: `
    <h1 class="text-warning text-center">Article</h1>
    <router-outlet></router-outlet>
  `,
})
export class ArticleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
