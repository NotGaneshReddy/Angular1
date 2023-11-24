// src/app/app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>My Angular App</h1>
    <app-my-stuff></app-my-stuff>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
