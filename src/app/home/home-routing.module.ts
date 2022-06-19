import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

// Mỗi module có nhiệm vụ định nghĩa route cho các component do nó quản lý
const routes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    // Ngoại trừ AppModule, tất cả module còn lại đều khai báo forChild khi sử dụng RouterModule để tạo routes
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
