import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
      .white-text {
          color: white;
      }

  `
  ]
})
export class AppComponent {
  title = 'app';
  secretCode = 'ASEEERth';
  showCode = false;
  logs = [];
  count = 0;
  toggleSecretCode() {
    this.showCode = !this.showCode;
    this.count += 1;
    this.logs.push(new Date());
  }
}
