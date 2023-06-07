import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { PlanetService } from '../../service/planet/planet.service';
import { Planet, PlanetPage } from '../../model/planetResponse';

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.scss'],
})
export class PlanetPageComponent implements OnInit {
  planetResponse!: PlanetPage;

  private currentPage = 1;
  incrementBy = 0;

  constructor(private planetService: PlanetService) {}
  planetContent: Planet[] = [];

  ngOnInit(): void {
    this.loadPlanets();
  }

  isShowMoreVisible(): boolean {
    return this.incrementBy < this.planetResponse.count;
  }

  formatPopulation(planet: Planet): string {
    return planet.population === 'unknown' ? 'unknown' : formatNumber(+planet.population, 'en-US');
  }

  showMore(): void {
    this.currentPage++;
    this.loadPlanets();
  }

  private loadPlanets(): void {
    this.planetService
      .getPlanetsList(this.currentPage)
      .pipe(take(1))
      .subscribe((planetResponse) => {
        this.incrementBy += planetResponse.results.length;
        this.planetResponse = planetResponse;
        this.planetContent = this.planetContent.concat(planetResponse.results);
      });
  }
}
