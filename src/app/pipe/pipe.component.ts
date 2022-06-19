import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template: `
    <!-- pipe dùng để format dữ liệu hiển thị ra giao diện -->
    <!-- Cách sử dụng pipe: {{ value | pipe }} -->

    <!-- pipe format chữ hoa/thường -->
    <p>{{ message | uppercase }}</p>
    <p>{{ message | lowercase }}</p>

    <!-- pipe format dữ liệu tiền tệ -->
    <p>Format USD: {{ price | currency }}</p>
    <p>Format VND: {{ price | currency: 'VND' }}</p>
    <p>Format SGD: {{ price | currency: 'SGD' }}</p>

    <!-- pipe format phần trăm -->
    <p>Phần trăm: {{ 0.81 | percent }}</p>

    <!-- pipe format ngày tháng -->
    <p>{{ startDate | date: 'dd/MM/yyyy' }}</p>
    <p>{{ startDate | date: 'dd/MM/yyyy hh:mm:ss' }}</p>
  `,
})
export class PipeComponent implements OnInit {
  message = 'Hello Cybersoft';
  price = 1000;
  startDate = '2021-08-26T15:11:29.533';

  constructor() {}

  ngOnInit() {}
}
