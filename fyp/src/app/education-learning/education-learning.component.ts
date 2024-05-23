import { Component } from '@angular/core';

@Component({
  selector: 'app-education-learning',
  templateUrl: './education-learning.component.html',
  styleUrl: './education-learning.component.css'
})
export class EducationLearningComponent {
  category = {
    name: 'Education & Learning',
    subcategories: [
      'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 
      'English Literature', 'History', 'Geography', 'Islamic Studies', 'Urdu', 
      'Business Studies', 'Accounting', 'Economics', 'Law', 'Psychology', 
      'Sociology', 'Other'
    ]
  };

  onClickSubcategory(subcategory: string): void {
    console.log('Clicked on: ', subcategory);
    
  }
}
