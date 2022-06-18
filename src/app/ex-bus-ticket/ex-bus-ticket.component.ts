import { Component, OnInit, ViewChild } from '@angular/core';
import { SeatListComponent } from './seat-list.component';

@Component({
  selector: 'app-bus-ticket',
  template: `
    <div class="container">
      <h1 class="text-warning text-center">Bus Ticket</h1>

      <div class="row">
        <div class="col-sm-6">
          <app-seat-list
            [seats]="seats"
            (onSelect)="handleSelect($event)"
          ></app-seat-list>
        </div>
        <div class="col-sm-6">
          <app-selected-seats
            [seats]="selectedSeats"
            (onRemove)="handleRemove($event)"
          ></app-selected-seats>
        </div>
      </div>
    </div>
  `,
})
export class ExBusTicketComponent implements OnInit {
  @ViewChild(SeatListComponent) seatListComp!: SeatListComponent;

  seats: any[] = [
    { id: 1, name: 'số 1', price: 100, booked: false },
    { id: 2, name: 'số 2', price: 100, booked: false },
    { id: 3, name: 'số 3', price: 100, booked: false },
    { id: 4, name: 'số 4', price: 100, booked: false },
    { id: 5, name: 'số 5', price: 100, booked: false },
    { id: 6, name: 'số 6', price: 100, booked: false },
    { id: 7, name: 'số 7', price: 100, booked: false },
    { id: 8, name: 'số 7', price: 100, booked: false },
    { id: 9, name: 'số 9', price: 100, booked: false },
    { id: 10, name: 'số 10', price: 100, booked: false },
    { id: 11, name: 'số 11', price: 100, booked: false },
    { id: 12, name: 'số 12', price: 100, booked: false },
    { id: 13, name: 'số 13', price: 100, booked: false },
    { id: 14, name: 'số 14', price: 100, booked: true },
    { id: 15, name: 'số 15', price: 100, booked: false },
    { id: 16, name: 'số 16', price: 100, booked: false },
    { id: 17, name: 'số 17', price: 100, booked: false },
    { id: 18, name: 'số 18', price: 100, booked: false },
    { id: 19, name: 'số 19', price: 100, booked: false },
    { id: 20, name: 'số 20', price: 100, booked: false },
    { id: 21, name: 'số 21', price: 100, booked: false },
    { id: 22, name: 'số 22', price: 100, booked: false },
    { id: 23, name: 'số 23', price: 100, booked: false },
    { id: 24, name: 'số 24', price: 100, booked: false },
    { id: 25, name: 'số 25', price: 100, booked: false },
    { id: 26, name: 'số 26', price: 100, booked: true },
    { id: 27, name: 'số 27', price: 100, booked: false },
    { id: 28, name: 'số 28', price: 100, booked: false },
    { id: 29, name: 'số 29', price: 100, booked: false },
    { id: 30, name: 'số 30', price: 100, booked: true },
    { id: 31, name: 'số 31', price: 100, booked: false },
    { id: 32, name: 'số 32', price: 100, booked: false },
    { id: 33, name: 'số 33', price: 100, booked: false },
    { id: 34, name: 'số 34', price: 100, booked: false },
    { id: 35, name: 'số 35', price: 100, booked: false },
    { id: 36, name: 'số 36', price: 100, booked: false },
  ];
  selectedSeats: any[] = [];

  constructor() {}
  ngOnInit() {}

  handleSelect(seat: any) {
    const { isSelected } = seat;

    if (isSelected) {
      this.selectedSeats.push(seat);
    } else {
      this.selectedSeats = this.selectedSeats.filter(
        (item) => item.id !== seat.id
      );
    }
  }

  handleRemove(seatId: number) {
    this.selectedSeats = this.selectedSeats.filter(
      (item) => item.id !== seatId
    );

    // Cần truy cập vào component có seatId tương ứng để chuyển trạng thái isSelected thành false
    this.seatListComp.handleRemove(seatId);
  }
}
