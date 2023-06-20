import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilPageComponent } from './util-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UtilPageComponent', () => {
  let component: UtilPageComponent;
  let fixture: ComponentFixture<UtilPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(UtilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
