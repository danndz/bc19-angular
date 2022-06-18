import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExBusTicketComponent } from './ex-bus-ticket.component';
import { SeatItemComponent } from './seat-item.component';
import { SeatListComponent } from './seat-list.component';
import { SelectedSeatsComponent } from './selected-seats.component';

@NgModule({
  imports: [CommonModule],
  exports: [ExBusTicketComponent],
  declarations: [
    ExBusTicketComponent,
    SeatListComponent,
    SeatItemComponent,
    SelectedSeatsComponent,
  ],
})
export class ExBusTicketModule {}
