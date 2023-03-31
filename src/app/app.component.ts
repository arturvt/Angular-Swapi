import { Component, OnInit } from '@angular/core';
import { SwapiService } from './swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-swapi';

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    console.log('AppComponent.ngOnInit()');
  }
}
