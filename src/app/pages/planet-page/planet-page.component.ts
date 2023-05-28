import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Planet, PlanetResponse } from 'src/app/service/model';
import { PlanetService } from '../../service/planet/planet.service';

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.scss'],
})
export class PlanetPageComponent implements OnInit {
  constructor(private swapiService: PlanetService) {}
  private currentPage = 1;
  incrementBy = 0;
  planetResponse!: PlanetResponse;
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
    this.swapiService
      .getPlanetsList(this.currentPage)
      .pipe(take(1))
      .subscribe((planetResponse) => {
        this.incrementBy += planetResponse.results.length;
        this.planetResponse = planetResponse;
        this.planetContent = this.planetContent.concat(planetResponse.results);
      });
  }
}
