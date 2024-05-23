import { Component } from '@angular/core';

@Component({
  selector: 'app-writing-translation',
  templateUrl: './writing-translation.component.html',
  styleUrl: './writing-translation.component.css'
})
export class WritingTranslationComponent {
  category = {
    name: 'Writing & Translation',
    subcategories: [
      'Articles & Blog Posts', 'Beta Reading', 'Book & eBook Writing', 'Book Editing', 
      'Brand Voice & Tone', 'Business Names & Slogans', 'Case Studies', 'Cover Letters', 
      'Creative Writing', 'Email Copy', 'Grant Writing', 'Legal Writing', 
      'LinkedIn Profiles', 'Online Language Lessons', 'Podcast Writing', 'Press Releases', 
      'Product Descriptions', 'Proofreading & Editing', 'Research & Summaries', 
      'Resume Writing', 'Sales Copy', 'Scriptwriting', 'Social Media Copy', 'Speechwriting', 
      'Technical Writing', 'Transcripts', 'Translation', 'UX Writing', 'Website Content', 
      'White Papers', 'Other'
    ]
  };

  onClickSubcategory(subcategory: string): void {
    console.log('Clicked on: ', subcategory);
    // Implement further navigation or data fetching logic here
  }
}
