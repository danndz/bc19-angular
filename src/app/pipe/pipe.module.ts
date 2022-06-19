import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PipeComponent } from './pipe.component';

const routes: Routes = [
  { path: "", component: PipeComponent }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [PipeComponent],
})
export class PipeModule {}
