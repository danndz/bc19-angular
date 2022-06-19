import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  template: `
    <div class="container">
      <h1>Articles</h1>

      <div class="row">
        <div class="col-sm-4" *ngFor="let article of articles">
          <div class="card">
            <div class="card-header text-center">
              {{ article.title }}
            </div>
            <div class="card-body">
              <p class="card-text">{{ article.content }}</p>
              <!-- <button
                class="btn btn-primary"
                routerLink="/articles/{{ article.slug }}"
              >
                Xem chi tiết
              </button> -->

              <button
                class="btn btn-primary"
                [routerLink]="article.slug"
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ArticleListComponent implements OnInit {
  articles: any[] = [
    {
      id: 1,
      slug: 'react',
      title: 'Reactjs',
      content: 'A JavaScript library for building user interfaces',
    },
    {
      id: 2,
      slug: 'angular',
      title: 'Angular 14',
      content: "The modern web developer's platform",
    },
    {
      id: 3,
      slug: 'vue',
      title: 'Vue 3',
      content: 'The Progressive JavaScript Framework',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
