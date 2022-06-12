import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <h3>Hello {{ name }}</h3>
  `,
})
export class WelcomeComponent implements OnInit {
  // Bắt buộc phải khai báo Input cho các properties nhận vào từ component cha
  @Input() name = '';
  @Input() age = 0;

  constructor() {}

  ngOnInit() {}
}
