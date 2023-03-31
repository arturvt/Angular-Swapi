import { Component, OnInit } from '@angular/core';
import { People, Planet, SwapiService } from './swapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-swapi';

  peopleList$: Observable<People[]> = this.swapiService.getPeopleList();
  planetList$: Observable<Planet[]> = this.swapiService.getPlanetsList();

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    console.log('AppComponent.ngOnInit()');
  }
}
