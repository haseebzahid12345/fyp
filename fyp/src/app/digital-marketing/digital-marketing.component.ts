import { Component } from '@angular/core';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrl: './digital-marketing.component.css'
})
export class DigitalMarketingComponent {
  category = {
    name: 'Digital Marketing',
    subcategories: [
      'Domain Research', 'E-Commerce Marketing', 'Influencer Marketing', 
      'Local SEO', 'Mobile Marketing & Advertising', 'Music Promotion', 
      'Web Traffic', 'Other'
    ]
  };

  onClickSubcategory(subcategory: string): void {
    console.log('Clicked on: ', subcategory);
    // Here you can add additional logic for navigation or data fetching
  }
}
