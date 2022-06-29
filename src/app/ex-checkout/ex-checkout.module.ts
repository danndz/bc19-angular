import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExCheckoutComponent } from './ex-checkout.component';

const routes: Routes = [
  { path: ":id", component: ExCheckoutComponent }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [ExCheckoutComponent],
})
export class ExCheckoutModule {}
