


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParseService } from '../services/parse.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  cardTitle: string = '';
  cardId: string = '';
  cardName: string = '';
  cardMakerID: string = '';
  constructor(private route: ActivatedRoute, private parseService: ParseService) {}

  ngOnInit() {
    this.cardId = this.route.snapshot.paramMap.get('id') as string;

    this.getCardDetails();
  }

// In your Angular component (e.g., card-detail.component.ts)
async getCardDetails() {
  try {
    const cardDetails = await this.parseService.getCardById(this.cardId);
    if (cardDetails.status === 1) {
      this.cardTitle = cardDetails.data.get("title");
      this.cardName = cardDetails.data.get("name");
      this.cardMakerID = cardDetails.data.get("object_Id_Of_signUpTeacher")

      // Handle other card details
    } else {
      // Handle the error case
    }
  } catch (error) {
    console.error('Error loading card details', error);
    // Handle the error
  }
}



}
