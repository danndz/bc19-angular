// CLI tạo module: ng generate module module-name
// Snippet tạo module: a-module

import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [HomeRoutingModule],
  // Khai báo các components do HomeModule quản lý
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    HomeComponent,
  ],
  // Khai báo các component này có thể sử dụng được ở các module khác nếu có import HomeModule
  exports: [
    // HeaderComponent,
    // FooterComponent,
    // ContentComponent,
    // SidebarComponent,
    HomeComponent,
  ],
})
export class HomeModule {}





