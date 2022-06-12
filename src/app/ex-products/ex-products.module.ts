import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExProductsComponent } from './ex-products.component';


@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [ExProductsComponent],
  declarations: [ExProductsComponent],
})
export class ExProductsModule { }
