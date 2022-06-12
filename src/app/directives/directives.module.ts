import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AttributeDirectivesComponent } from './attribute-directives.component';
import { StructuralDirectivesComponent } from './structural-directives.component';

@NgModule({
  // Để sử dụng được các directives do angular cung cấp bên trong các component do module quản lý ta cần import CommonModule
  imports: [CommonModule],
  exports: [StructuralDirectivesComponent, AttributeDirectivesComponent],
  declarations: [StructuralDirectivesComponent, AttributeDirectivesComponent],
})
export class DirectivesModule {}
