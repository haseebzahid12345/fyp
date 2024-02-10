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
  level1_price : string = '';
  level2_price : string = '';
  level3_price : string = '';
  level1_description : string = '';
  level2_description : string = '';
  level3_description: string = ''
  experience: string = '';
  level: string = '';
  skillLevel : string = ''
  type : string = ''

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
     console.log(cardDetails)
      this.cardTitle = cardDetails.data.title;
      this.level1_price = cardDetails.data.level1_price;
      console.log(this.level1_price);
      this.level1_description = cardDetails.data.level1_Description;
      this.level2_price = cardDetails.data.level2_price;
      this.level2_description = cardDetails.data.level2_Description;
      // this.level3_price = cardDetails.data.level3_price;
      // this.level3_description = cardDetails.data.level3_Description;
      // this.experience = cardDetails.get.experience;
      // this.level = cardDetails.get.level;
      // this.type = cardDetails.get.type;
      // this.skillLevel = cardDetails.get.skillLevel;
    
      this.cardName = cardDetails.data.user.firstname;
     
    } else {
      // Handle the error case
    }
  } catch (error) {
    console.error('Error loading card details', error);
    // Handle the error
  }
}

// async getConversationID(TeacherID : string ,  StudentID :  string ){
//   const id_get = await this.parseService.getConversationID(TeacherID, StudentID);
//   console.log(id_get);
//     return id_get;
   
// }



}
