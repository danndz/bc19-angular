import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding.component';

@NgModule({
  imports: [FormsModule],
  exports: [DataBindingComponent],
  declarations: [DataBindingComponent],
})
export class DataBindingModule {}
