import { Component } from '@angular/core';

@Component({
  selector: 'app-music-audio',
  templateUrl: './music-audio.component.html',
  styleUrl: './music-audio.component.css'
})
export class MusicAudioComponent {
  category = {
    name: 'Music & Audio',
    subcategories: [
      'Audio Ads Production', 'Audiobook Production', 'DJ Drops & Tags', 
      'Dialogue Editing', 'Jingles & Intros', 'Mixing & Mastering', 
      'Music Transcription', 'Online Music Lessons', 'Podcast Editing', 
      'Producers & Composers', 'Session Musicians', 'Singers & Vocalists', 
      'Songwriters', 'Sound Design', 'Vocal Tuning', 'Voice Over', 'Other'
    ]
  };

  onClickSubcategory(subcategory: string): void {
    console.log('Clicked on: ', subcategory);
    // Implement navigation or data fetching logic here
  }
}
