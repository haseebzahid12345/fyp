import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingTranslationComponent } from './writing-translation.component';

describe('WritingTranslationComponent', () => {
  let component: WritingTranslationComponent;
  let fixture: ComponentFixture<WritingTranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritingTranslationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WritingTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
