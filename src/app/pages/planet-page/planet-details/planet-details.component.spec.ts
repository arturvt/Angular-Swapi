import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanetDetailsComponent } from './planet-details.component';
import { PeopleService } from '../../../service/people/people.service';
import { PlanetService } from '../../../service/planet/planet.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { planet01 } from '../../../test-data/planet-mocks';
import { of } from 'rxjs';

describe('PlanetDetailsComponent', () => {
  let component: PlanetDetailsComponent;
  let fixture: ComponentFixture<PlanetDetailsComponent>;
  let httpTestingController: HttpTestingController;
  let peopleServiceSpy: jasmine.SpyObj<PeopleService>;

  beforeEach(() => {
    peopleServiceSpy = jasmine.createSpyObj('PeopleService', ['getPeopleNames']);
    peopleServiceSpy.getPeopleNames.and.returnValue(of('Luke Skywalker'));
    TestBed.configureTestingModule({
      declarations: [PlanetDetailsComponent],
      imports: [HttpClientTestingModule],
      providers: [
        PlanetService,
        { provide: PeopleService, useValue: peopleServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: '1',
              }),
            },
          },
        },
      ],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(PlanetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const req = httpTestingController.expectOne('https://swapi.dev/api/planets/1');
    expect(req.request.method).toEqual('GET');
    req.flush(planet01);
    expect(component).toBeTruthy();
    expect(component.residentNames).toEqual(['Luke Skywalker']);
  });
});
