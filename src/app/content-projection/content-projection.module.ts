import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentProjectionComponent } from './content-projection.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule],
  exports: [ContentProjectionComponent],
  declarations: [
    ContentProjectionComponent,
    HeaderComponent
  ],
})
export class ContentProjectionModule {}
