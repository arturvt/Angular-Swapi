import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetPageComponent } from './planet-page.component';
import { PlanetService } from '../../service/planet/planet.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getPlanetsResponse } from '../../test-data/planet-mocks';

describe('PlanetPageComponent', () => {
  let component: PlanetPageComponent;
  let fixture: ComponentFixture<PlanetPageComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetPageComponent],
      imports: [HttpClientTestingModule],
      providers: [PlanetService],
    });
    fixture = TestBed.createComponent(PlanetPageComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const req = httpTestingController.expectOne('https://swapi.dev/api/planets?page=1');
    expect(req.request.method).toEqual('GET');
    req.flush(getPlanetsResponse);
    expect(component).toBeTruthy();
    expect(component.planetResponse).toBeTruthy();
    expect(component.planetResponse.count).toEqual(2);
    expect(component.planetResponse.results.length).toEqual(2);
    expect(component.planetResponse.results[0].name).toEqual('Dagobah');
    expect(component.planetResponse.results[1].name).toEqual('Bespin');
    expect(component.incrementBy).toEqual(2);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });
});
