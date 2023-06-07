import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanetDetailsComponent } from './planet-details.component';
import { PeopleService } from '../../../service/people/people.service';
import { PlanetService } from '../../../service/planet/planet.service';

describe('PlanetDetailsComponent', () => {
  let component: PlanetDetailsComponent;
  let fixture: ComponentFixture<PlanetDetailsComponent>;
  let planetServiceSpy: jasmine.SpyObj<PlanetService>;
  let peopleServiceSpy: jasmine.SpyObj<PeopleService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetDetailsComponent],
      providers: [
        { provide: PlanetService, useValue: planetServiceSpy },
        { provide: PeopleService, useValue: peopleServiceSpy },
      ],
    });
    fixture = TestBed.createComponent(PlanetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
