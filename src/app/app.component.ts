import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <main class="page-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .page-content {
      padding-top: 64px;
    }
  `]
})
export class AppComponent {}
