import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestforteachersComponent } from './requestforteachers.component';

describe('RequestforteachersComponent', () => {
  let component: RequestforteachersComponent;
  let fixture: ComponentFixture<RequestforteachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestforteachersComponent]
    });
    fixture = TestBed.createComponent(RequestforteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
