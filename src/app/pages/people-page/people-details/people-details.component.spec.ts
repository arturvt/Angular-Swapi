import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDetailsComponent } from './people-details.component';
import { PeopleService } from '../../../service/people/people.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('PeopleDetailsComponent', () => {
  let component: PeopleDetailsComponent;
  let fixture: ComponentFixture<PeopleDetailsComponent>;
  let peopleServiceSpy: jasmine.SpyObj<PeopleService>;

  beforeEach(() => {
    peopleServiceSpy = jasmine.createSpyObj('PeopleService', ['getPeople']);

    TestBed.configureTestingModule({
      declarations: [PeopleDetailsComponent],
      providers: [
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
    fixture = TestBed.createComponent(PeopleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(peopleServiceSpy.getPeople).toHaveBeenCalledWith(1);
  });
});
