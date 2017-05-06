import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pb-app',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="app">
      <pb-header></pb-header>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
}