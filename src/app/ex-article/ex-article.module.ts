import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleDetailComponent } from './article-detail.component';
import { ArticleListComponent } from './article-list.component';
import { ArticleComponent } from './article.component';

const routes: Routes = [
  {
    path: '',
    // Để nhiều routes có cùng chung 1 layout ta khai báo route dạng parent-children
    // Ở parent route ta khai báo một component (thường được gọi là layout component), bên trong layout component bắt buộc phải khai báo router-outlet thì các children routes mới có thể được render ra
    component: ArticleComponent,
    children: [
      { path: '', component: ArticleListComponent }, // path: articles
      { path: ':slug', component: ArticleDetailComponent }, // path: articles/react
    ],
  },

  // { path: 'articles', component: ArticleListComponent },
  // { path: 'articles/:slug', component: ArticleDetailComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleComponent,
  ],
})
export class ExArticleModule {}
