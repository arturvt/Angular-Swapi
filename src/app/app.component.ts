import { Component, OnInit } from '@angular/core';
import { SwapiFacade } from '@libs/swapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-swapi';

  constructor(private swapiFacade: SwapiFacade) {}

  ngOnInit(): void {
    console.log('Init facade');
    this.swapiFacade.init();
  }

  tabChanged(tabName: string) {
    console.log(`tab changed to ${tabName}`);
  }
}
