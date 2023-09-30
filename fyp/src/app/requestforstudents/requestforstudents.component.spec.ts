import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestforstudentsComponent } from './requestforstudents.component';

describe('RequestforstudentsComponent', () => {
  let component: RequestforstudentsComponent;
  let fixture: ComponentFixture<RequestforstudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestforstudentsComponent]
    });
    fixture = TestBed.createComponent(RequestforstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
