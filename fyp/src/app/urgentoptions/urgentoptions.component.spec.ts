import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentoptionsComponent } from './urgentoptions.component';

describe('UrgentoptionsComponent', () => {
  let component: UrgentoptionsComponent;
  let fixture: ComponentFixture<UrgentoptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrgentoptionsComponent]
    });
    fixture = TestBed.createComponent(UrgentoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
