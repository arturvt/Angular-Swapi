import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../../service/planet/planet.service';
import { ActivatedRoute } from '@angular/router';
import { PlanetDetails } from '../../../model/planetResponse';
import { PeopleService } from '../../../service/people/people.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
})
export class PlanetDetailsComponent implements OnInit {
  planet: PlanetDetails | undefined;
  residentNames: string[] = [];
  constructor(private activatedRoute: ActivatedRoute, private planetService: PlanetService, private peopleService: PeopleService) {}

  ngOnInit() {
    const planetId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.planetService.getPlanet(planetId).subscribe((planet) => {
      this.planet = planet;

      // TODO: This can be converted to Signals!
      // https://blog.angular.io/angular-v16-is-here-4d7a28ec680d (RxJS interoperability)
      this.peopleService.getPeopleNames(planet.residents).subscribe((name) => {
        this.residentNames?.push(name);
      });
    });
  }
}
