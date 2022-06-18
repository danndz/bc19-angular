import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  template: `
    <h1>Content Projection</h1>

    <app-header>
      <ng-container brand>
        Cybersoft
      </ng-container>

      <ng-container menu>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
      </ng-container>
    </app-header>
    <br />
    <app-header>
      <ng-container brand>
        BC19 - Angular
      </ng-container>
    </app-header>
  `,
})
export class ContentProjectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
