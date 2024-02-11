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
  skillLevel : string = '';
  type : string = '';
  category : string = '';
  subcategory :  string = '';

  constructor(private route: ActivatedRoute, private parseService: ParseService) {}

  ngOnInit() {
    this.cardId = this.route.snapshot.paramMap.get('id') as string;

    this.getCardDetails();
  }

// In your Angular component (e.g., card-detail.component.ts)
async getCardDetails() {
  try {
    const cardDetails = await this.parseService.getGigById(this.cardId);
   
    if (cardDetails.status === 1) {
     console.log(cardDetails)
      this.cardTitle = cardDetails.data.title;
      this.level1_price = cardDetails.data.level_1_price;
      this.level1_description = cardDetails.data.level_1_Description;
      this.level2_price = cardDetails.data.level_2_price;
      this.level2_description = cardDetails.data.level_2_Description;
      this.level3_price = cardDetails.data.level_3_price;
      this.level3_description = cardDetails.data.level_3_Description;
      this.experience = cardDetails.data.experience;
      this.level = cardDetails.data.level;
      this.type = cardDetails.data.type;
       this.skillLevel = cardDetails.data.skillLevel;
      this.cardName = cardDetails.data.user.firstname;
      this.category = cardDetails.data.category ;
      this.subcategory = cardDetails.data.subcategory ;
     
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
