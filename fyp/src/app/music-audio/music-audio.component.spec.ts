import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicAudioComponent } from './music-audio.component';

describe('MusicAudioComponent', () => {
  let component: MusicAudioComponent;
  let fixture: ComponentFixture<MusicAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicAudioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
