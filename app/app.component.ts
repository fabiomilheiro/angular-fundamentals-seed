import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class='app'>
    {{this.title}}
  </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Ultimate Angular';
  }

}