import { Component, OnInit } from '@angular/core';
import { SwapiService } from './service/swapi.service';
import { Observable } from 'rxjs';
import {Data} from "./service/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-swapi';
  data$: Observable<Data> = this.swapiService.getData();

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    console.log('AppComponent.ngOnInit()');
  }
}
