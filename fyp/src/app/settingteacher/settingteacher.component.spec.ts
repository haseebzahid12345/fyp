import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingteacherComponent } from './settingteacher.component';

describe('SettingteacherComponent', () => {
  let component: SettingteacherComponent;
  let fixture: ComponentFixture<SettingteacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingteacherComponent]
    });
    fixture = TestBed.createComponent(SettingteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
