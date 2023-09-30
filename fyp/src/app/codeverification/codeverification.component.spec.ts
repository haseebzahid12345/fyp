import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeverificationComponent } from './codeverification.component';

describe('CodeverificationComponent', () => {
  let component: CodeverificationComponent;
  let fixture: ComponentFixture<CodeverificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeverificationComponent]
    });
    fixture = TestBed.createComponent(CodeverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
