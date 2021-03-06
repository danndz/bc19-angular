import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InteractionComponent } from './interaction.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ToggleComponent } from './toggle.component';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [CommonModule],
  exports: [InteractionComponent],
  declarations: [
    InteractionComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ToggleComponent,
  ],
})
export class InteractionModule {}
