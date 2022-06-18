import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat-item',
  template: `
    <button
      class="seat btn btn-secondary"
      [class]="{
        'bg-danger': seat.booked,
        'bg-success': isSelected
      }"
      [disabled]="seat.booked"
      (click)="handleSelect()"
    >
      {{ seat.id }}
    </button>
  `,
  styles: [
    `
      .seat {
        width: 70px;
        height: 70px;
        margin: 10px;
      }
    `,
  ],
})
export class SeatItemComponent implements OnInit {
  @Input() seat: any = null;
  @Output() onSelect = new EventEmitter();

  // quản lý trạng ghế có đang được chọn hay không
  isSelected = false;

  constructor() {}
  ngOnInit() {}
  handleSelect() {
    this.isSelected = !this.isSelected;
    // Truyền dữ liệu của ghế vừa chọn lên component cha
    this.onSelect.emit({ ...this.seat, isSelected: this.isSelected });
  }
}
