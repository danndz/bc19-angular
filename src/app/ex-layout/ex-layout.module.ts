import { NgModule } from '@angular/core';
import { ExLayoutComponent } from './ex-layout.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { IndexContentComponent } from './index-content.component';
import { IndexComponent } from './index.component';
import { ItemComponent } from './item.component';
import { SliderComponent } from './slider.component';

@NgModule({
  imports: [],
  exports: [ExLayoutComponent],
  declarations: [
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    IndexContentComponent,
    ItemComponent,
    SliderComponent,
    ExLayoutComponent,
  ],
})
export class ExLayoutModule {}
