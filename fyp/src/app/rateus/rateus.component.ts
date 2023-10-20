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
}
