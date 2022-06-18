import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { SeatItemComponent } from './seat-item.component';

@Component({
  selector: 'app-seat-list',
  template: `
    <div class="w-100 p-2 text-center bg-dark text-white">
      <span>Tài xế</span>
    </div>

    <div class="row">
      <div class="col-sm-3" *ngFor="let seat of seats">
        <app-seat-item
          [seat]="seat"
          (onSelect)="onSelect.emit($event)"
        ></app-seat-item>
      </div>
    </div>
  `,
})
export class SeatListComponent implements OnInit {
  @Input() seats: any[] = [];
  @Output() onSelect = new EventEmitter();
  @ViewChildren(SeatItemComponent) seatItemComps!: QueryList<SeatItemComponent>;

  constructor() {}

  ngOnInit() {}

  handleRemove(seatId: number) {
    // Duyệt qua lần lượt các component SeatItem và kiểm tra nếu seat.id của component khớp với seatId vừa xoá, ta sẽ set trạng thái isSelected của component đó thành false
    this.seatItemComps.forEach((item: SeatItemComponent) => {
      if (item.seat.id === seatId) {
        item.isSelected = false;
      }
    });
  }
}
