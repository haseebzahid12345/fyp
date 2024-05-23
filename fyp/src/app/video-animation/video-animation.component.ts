import { Component } from '@angular/core';

@Component({
  selector: 'app-video-animation',
  templateUrl: './video-animation.component.html',
  styleUrl: './video-animation.component.css'
})
export class VideoAnimationComponent {
  category = {
    name: 'Video & Animation',
    subcategories: [
      '3D Product Animation', 'Animated GIFs', 'Animation for Kids', 
      'Animation for Streamers', 'App & Website Previews', 'Article to Video', 
      'Book Trailers', 'Character Animation', 'Game Trailers', 'Intros & Outros', 
      'Live Action Explainers', 'Local Photography', 'Logo Animation', 
      'Lyric & Music Videos', 'Product Photography', 'Real Estate Promos', 
      'Screencasting Videos', 'Short Video Ads', 'Slideshows Videos', 
      'Spokespersons Videos', 'Subtitles & Captions', 'Unboxing Videos', 
      'Video Editing', 'Visual Effects', 'Whiteboard & Animated Explainers', 
      'eLearning Video Production', 'Other'
    ]
  };

  onClickSubcategory(subcategory: string): void {
    console.log('Clicked on: ', subcategory);
    // Implement further navigation or data fetching logic here
  }
}
