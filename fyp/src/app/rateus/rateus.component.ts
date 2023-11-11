import { Component } from '@angular/core';

@Component({
  selector: 'app-rateus',
  templateUrl: './rateus.component.html',
  styleUrls: ['./rateus.component.css']
})
export class RateusComponent {
  selectedRating: number = 0;

  updateRating(value: number) {
    this.selectedRating = value;
  }

  getRatingText(rating: number): string {
    switch (rating) {
      case 1:
        return 'Poor';
      case 2:
        return 'Fair';
      case 3:
        return 'Average';
      case 4:
        return 'Good';
      case 5:
        return 'Excellent';
      default:
        return ''; // Handle other cases as needed
    }
  }
}
