import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeModule } from './home/home.module';
import { ExLayoutModule } from './ex-layout/ex-layout.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DirectivesModule } from './directives/directives.module';
import { ExProductsModule } from './ex-products/ex-products.module';
import { InteractionModule } from './interaction/interaction.module';
import { ExBusTicketModule } from './ex-bus-ticket/ex-bus-ticket.module';
import { ContentProjectionModule } from './content-projection/content-projection.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
// import { ExArticleModule } from './ex-article/ex-article.module';

// Typescript decorator
// Khi có khai báo @NgModule nghĩa là đây là 1 module của angular
// Module trong angular là nơi quản lý các components
@NgModule({
  // declarations: Nơi khai báo các component do module quản lý
  // Một component bắt buộc phải được 1 module quản lý
  // Một module sẽ quản lý nhiều components
  declarations: [AppComponent, WelcomeComponent, HelloWorldComponent],
  // imports: Nơi khai báo các module cần sử dụng
  // Angular cung cấp một số module FormModule, RouterModule, HttpClientModule,... nếu các component của AppModule muốn sử dụng các chức năng của các module này thì cần gắn các module này vào mảng imports
  // HomeModule có các components như: Header, Sidebar, Content, Footer. Nếu AppComponent muốn sử dụng các component này thì AppModule cần import HomeModule và khai báo trong mảng imports
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    HomeModule,
    ExLayoutModule,
    DataBindingModule,
    DirectivesModule,
    ExProductsModule,
    InteractionModule,
    ExBusTicketModule,
    ContentProjectionModule,
    BrowserAnimationsModule,
    AngularMaterialModule,

    // Không import trực tiếp để có thế sử dụng cơ chế lazyload
    // ExArticleModule,
  ],
  providers: [
    // Override lại interceptor mặc định của HttpClientModule
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
