import { Component } from '@angular/core';

@Component({
  selector: 'app-programming-tech',
  templateUrl: './programming-tech.component.html',
  styleUrl: './programming-tech.component.css'
})
export class ProgrammingTechComponent {
  category = {
    name: 'Programming & Tech',
    subcategories: [
      'Chatbots', 'Convert Files', 'Cybersecurity & Data Protection', 
      'Data Analysis & Reports', 'Databases', 'Desktop Applications', 
      'Development for Streamers', 'E-Commerce Development', 'Game Development', 
      'Mobile Apps', 'Online Coding Lessons', 'QA', 'Support & IT', 'User Testing', 
      'Web Programming', 'Website Builders & CMS', 'WordPress', 'C++ Programming', 
      'C# Programming', 'Java Programming', 'Python Programming', 
      'JavaScript Programming', 'PHP Programming', 'Other'
    ]
  };

  onClickSubcategory(subcategory: string): void {
    console.log('Clicked on: ', subcategory);
    // Add further navigation or data fetching logic here
  }
}
