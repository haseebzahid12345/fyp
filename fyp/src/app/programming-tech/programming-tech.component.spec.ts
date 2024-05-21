import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingTechComponent } from './programming-tech.component';

describe('ProgrammingTechComponent', () => {
  let component: ProgrammingTechComponent;
  let fixture: ComponentFixture<ProgrammingTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammingTechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgrammingTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
