import { Component } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {
  category = {
    name: 'Business',
    subcategories: [
      'Branding Services', 'Business Consulting', 'Business Plans', 
      'Career Counseling', 'Data Entry', 'E-Commerce Management', 
      'Financial Consulting', 'Flyer Distribution', 'HR Consulting', 
      'Lead Generation', 'Legal Consulting', 'Market Research', 
      'Presentations', 'Project Management', 'Virtual Assistant', 'Other'
    ]
  };

  onClickSubcategory(subcategory: string): void {
    console.log('Clicked on: ', subcategory);
     
  }
}
