import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterstudentComponent } from './filterstudent.component';

describe('FilterstudentComponent', () => {
  let component: FilterstudentComponent;
  let fixture: ComponentFixture<FilterstudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterstudentComponent]
    });
    fixture = TestBed.createComponent(FilterstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
