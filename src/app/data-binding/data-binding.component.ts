import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `
    <h1>Interpolation</h1>

    <p>Message: {{ message }}</p>
    <p>User: {{ user.name }} - {{ user.email }}</p>

    <h1>Property binding</h1>
    <input type="text" [value]="message" [disabled]="isDisabled" />

    <h1>Event Binding</h1>
    <button (click)="showMessage()">Click me!</button>

    <!-- Kết hợp Property binding & Event binding -->
    <p>Username: {{ username }}</p>
    <input type="text" [value]="username" (input)="changeUsername($event)" />

    <!-- Two-way binding -->
    <p>Email: {{ email }}</p>
    <input type="text" [(ngModel)]="email" />

    <!-- template reference variable -->
    <p>Address: {{ addressRef.value }}</p>
    <input type="text" #addressRef />
    <button (click)="changeAddress(addressRef.value)">
      Submit
    </button>
  `,
})
export class DataBindingComponent implements OnInit {
  message = 'Hello BC19';
  user = {
    name: 'Dan Nguyen',
    email: 'dan@gmail.com',
  };
  isDisabled = true;

  username = '';
  email = '';
  address = '';

  constructor() {}
  ngOnInit() {}

  showMessage() {
    alert('Hello BC19');
  }

  changeUsername(evt: Event) {
    // Kiểm tra xem element có phải là thẻ input hay không
    if (evt.target instanceof HTMLInputElement) {
      this.username = evt.target.value;
    }
  }

  changeAddress(value: string) {
    this.address = value;
  }
}
