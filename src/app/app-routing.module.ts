// File gốc để setup router cho ứng dụng angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from './home/home.component';
// import { ExBusTicketComponent } from './ex-bus-ticket/ex-bus-ticket.component';
// import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { WelcomeComponent } from './welcome/welcome.component';

// Định nghĩa các routes có trong ứng dụng
const routes: Routes = [
  { path: '', component: WelcomeComponent },

  // Các component dưới đây thuộc sự quản lý của các module khác => không nên khai báo route cho các component này tại app module
  // { path: 'home', component: HomeComponent },
  // { path: 'bus-ticket', component: ExBusTicketComponent },
  // { path: 'material', component: AngularMaterialComponent },

  // Khai báo lazyload tới module
  {
    path: 'articles',
    // Chỉ khi nào url là /articles mới bắt đầu import và tải ExArticleModule về
    loadChildren: () =>
      import('./ex-article/ex-article.module').then((m) => m.ExArticleModule),
  },
  {
    path: 'pipe',
    loadChildren: () => import('./pipe/pipe.module').then((m) => m.PipeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
