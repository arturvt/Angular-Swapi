import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplePageComponent } from './people.page.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PeopleService } from '../../service/people/people.service';
import { peoplePage01 } from '../../test-data/people-mock';

describe('PeoplePageComponent', () => {
  let component: PeoplePageComponent;
  let fixture: ComponentFixture<PeoplePageComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeoplePageComponent],
      imports: [HttpClientTestingModule],
      providers: [PeopleService],
    });
    fixture = TestBed.createComponent(PeoplePageComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const req = httpTestingController.expectOne('https://swapi.dev/api/people?page=1');
    expect(req.request.method).toEqual('GET');
    req.flush(peoplePage01);
    expect(component).toBeTruthy();
    expect(component.peopleResponse).toBeTruthy();
    expect(component.peopleResponse.count).toEqual(2);
  });
});
