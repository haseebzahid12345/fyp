import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationLearningComponent } from './education-learning.component';

describe('EducationLearningComponent', () => {
  let component: EducationLearningComponent;
  let fixture: ComponentFixture<EducationLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationLearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
