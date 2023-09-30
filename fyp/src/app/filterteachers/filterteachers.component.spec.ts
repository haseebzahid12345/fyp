import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterteachersComponent } from './filterteachers.component';

describe('FilterteachersComponent', () => {
  let component: FilterteachersComponent;
  let fixture: ComponentFixture<FilterteachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterteachersComponent]
    });
    fixture = TestBed.createComponent(FilterteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
