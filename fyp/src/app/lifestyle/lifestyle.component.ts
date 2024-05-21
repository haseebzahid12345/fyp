import { Component } from '@angular/core';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrl: './lifestyle.component.css'
})
export class LifestyleComponent {
  category = {
    name: 'Lifestyle',
    subcategories: [
      'Arts & Crafts', 'Astrology & Readings', 'Celebrity Impersonators', 
      'Collectibles', 'Cooking Lessons', 'Craft Lessons', 'Family & Genealogy', 
      'Fitness Lessons', 'Gaming', 'Greeting Cards & Videos', 
      'Health Nutrition & Fitness', 'Online Lessons', 'Personal Stylists', 
      'Relationship Advice', 'Spiritual & Healing', 'Traveling', 
      'Viral Videos', 'Other'
    ]
  };

  onClickSubcategory(subcategory: string): void {
    console.log('Clicked on: ', subcategory);
    // Additional logic for navigation or fetching data can be implemented here
  }

}
