import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityandlegalComponent } from './communityandlegal.component';

describe('CommunityandlegalComponent', () => {
  let component: CommunityandlegalComponent;
  let fixture: ComponentFixture<CommunityandlegalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityandlegalComponent]
    });
    fixture = TestBed.createComponent(CommunityandlegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
