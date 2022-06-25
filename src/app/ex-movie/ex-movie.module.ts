import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExMovieComponent } from './ex-movie.component';

const routes: Routes = [{ path: '', component: ExMovieComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [ExMovieComponent],
})
export class ExMovieModule {}
