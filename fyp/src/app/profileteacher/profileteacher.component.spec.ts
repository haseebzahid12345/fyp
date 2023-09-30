import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileteacherComponent } from './profileteacher.component';

describe('ProfileteacherComponent', () => {
  let component: ProfileteacherComponent;
  let fixture: ComponentFixture<ProfileteacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileteacherComponent]
    });
    fixture = TestBed.createComponent(ProfileteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
