import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExBusTicketComponent } from './ex-bus-ticket.component';
import { SeatItemComponent } from './seat-item.component';
import { SeatListComponent } from './seat-list.component';
import { SelectedSeatsComponent } from './selected-seats.component';

// cấu hình routes cho những component do module quản lý
const routes: Routes = [
  { path: "bus-ticket", component: ExBusTicketComponent }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ExBusTicketComponent],
  declarations: [
    ExBusTicketComponent,
    SeatListComponent,
    SeatItemComponent,
    SelectedSeatsComponent,
  ],
})
export class ExBusTicketModule {}
