import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  template: `
    <!-- Class binding -->
    <!-- thẻ p sẽ có có class text-primary khi isActive là true -->
    <!-- Cách 1: -->
    <p class="text-center" [class.text-primary]="isActive">
      Binding class cách 1
    </p>

    <!-- Cách 2: -->
    <p
      class="text-center"
      [class]="{
        'text-success': isActive,
        'text-danger': !isActive
      }"
    >
      Binding class cách 2
    </p>

    <button (click)="isActive = !isActive">Toggle Active</button>

    <!-- style binding -->
    <div
      style="width: 200px; height: 300px"
      [style.backgroundImage]="'url(' + imgUrl + ')'"
    ></div>
  `,
})
export class AttributeDirectivesComponent implements OnInit {
  isActive = true;
  imgUrl = 'https://picsum.photos/200/300';

  constructor() {}

  ngOnInit() {}
}
