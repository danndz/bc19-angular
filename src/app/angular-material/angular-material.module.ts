import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AngularMaterialComponent } from './angular-material.component';

const routes: Routes = [
  { path: 'material', component: AngularMaterialComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    // Khi đã dùng router cho component thì ta không cần phải export
    // AngularMaterialComponent
  ],
  declarations: [AngularMaterialComponent],
})
export class AngularMaterialModule {}
