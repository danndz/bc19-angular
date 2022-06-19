import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  template: `
    <div>
      <button mat-button>Basic</button>
      <button mat-button color="primary">Primary</button>
      <button mat-button color="accent">Accent</button>
      <button mat-button color="warn">Warn</button>
      <button mat-button disabled>Disabled</button>
      <a mat-button href="https://www.google.com/" target="_blank">Link</a>
    </div>

    <div>
      <button mat-raised-button>Basic</button>
      <button mat-raised-button color="primary">Primary</button>
      <button mat-raised-button color="accent">Accent</button>
      <button mat-raised-button color="warn">Warn</button>
      <button mat-raised-button disabled>Disabled</button>
      <a mat-raised-button href="https://www.google.com/" target="_blank"
        >Link</a
      >

      <br />
      <br />

      <mat-form-field class="w-25" appearance="fill">
        <mat-label>Favorite food</mat-label>
        <input matInput placeholder="Ex. Pizza" value="Sushi" />
      </mat-form-field>
    </div>
  `,
})
export class AngularMaterialComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
