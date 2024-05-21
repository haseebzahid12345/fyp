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
  teacherId : string = "";
  image1 : string = "";
  image2 : string = "";
  image3 : string = "";
  orderDay1: string="";
  orderDay2:string="";
  orderDay3:string = "";
  selectedPrice: string = '';
  orderDays:string='';
  isOrderButtonVisible: boolean = false;
  activePriceButton: string | null = null;
  // In CardDetailComponent class
reviews: { review: string; studentName: string }[] = [];  // Add this property to store reviews





  constructor(private route: ActivatedRoute, private parseService: ParseService) {}

  ngOnInit() {
    // cardId ko hum ne home ke card se yha pr liya ha
    this.cardId = this.route.snapshot.paramMap.get('id') as string;
    this.getCardDetails();
    this.getHistoryOrderDetails();
  }


  selectPrice(price: string) {
    this.selectedPrice = price;
    this.isOrderButtonVisible = true; 
    this.activePriceButton = price; 
  }


  async getHistoryOrderDetails(){ 
    try {
      // ....(4)....  //cardId ko de kr hum all "success: true" aur reviews me cardId ko jis ne
      // bhi review diya ha wo ....."reviews"..... aur us ka ...."name"..... aae ga,, agar koi issue ho
      //to  "success: false"   message: `Error fetching order details: ${error.message}
      const historyDetails = await this.parseService.getHistoryOrderDetails(this.cardId);
      if (historyDetails && historyDetails.reviews) {
        this.reviews = historyDetails.reviews;
      }
    } catch (error) {
      console.error('Error fetching history details', error);
    }
  }
  

  orderDaysSelected(order: string) {
    this.orderDays = order;
     console.log(this.orderDays);
   // Show the button when a price is selected
  }

  toggleButton(price: string,order:string) {
    if (this.activePriceButton === price) {
      this.activePriceButton = null;  // Reset on double-click
      this.selectedPrice = '';
    } else {
      this.selectPrice(price); 
      this.orderDaysSelected(order); // Set new price on click
    }
  }
// In your Angular component (e.g., card-detail.component.ts)
async getCardDetails() {
  try {


    // ....20.....// cardId de kr hum gig ki status:1 ....aur hum gig ke table ki almost all info and userId teacher ki aur name teacher ka
    // aur agar issue ho ga to ye info aae gi status: 0,
    //  message: "Error fetching card by ID",
    const cardDetails = await this.parseService.getGigByIdd(this.cardId);
    console.log(cardDetails);
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
      this.teacherId = cardDetails.data.user.userId;
      this.image1 = cardDetails.data.image1;
      this.image2 = cardDetails.data.image2;
      this.image3 = cardDetails.data.image3;
      this.orderDay1 = cardDetails.data.orderDay1;
      this.orderDay2  = cardDetails.data.orderDay2;
      this.orderDay3  = cardDetails.data.orderDay3;
      console.log(this.orderDay1);
     
    } else {
      // Handle the error case
    }
  } catch (error) {
    console.error('Error loading card details', error);
    // Handle the error
  }
}





}
