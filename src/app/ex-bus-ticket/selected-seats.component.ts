import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selected-seats',
  template: `
    <h3 class="text-warning">
      Danh sách ghế đang chọn
      <span *ngIf="seats.length">
        {{ seats.length }}
      </span>
    </h3>

    <p *ngFor="let seat of seats">
      <span class="me-4">Ghế: {{ seat.name }} - {{ seat.price }}$</span>
      <button class="btn btn-outline-danger" (click)="handleRemove(seat.id)">
        Xoá
      </button>
    </p>
  `,
})
export class SelectedSeatsComponent implements OnInit {
  @Input() seats: any[] = [];
  @Output() onRemove = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleRemove(seatId: number) {
    this.onRemove.emit(seatId);
  }
}
