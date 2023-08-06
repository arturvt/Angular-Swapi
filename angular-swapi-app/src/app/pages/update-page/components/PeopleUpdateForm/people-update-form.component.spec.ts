import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeopleUpdateFormComponent } from './people-update-form.component';

describe('PeopleUpdateFormComponent', () => {
  let component: PeopleUpdateFormComponent;
  let fixture: ComponentFixture<PeopleUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeopleUpdateFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
