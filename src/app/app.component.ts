import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-swapi';

  tabChanged(tabName: string) {
    console.log(`tab changed to ${tabName}`);
  }
}
