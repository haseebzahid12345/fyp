import { Component ,OnInit } from '@angular/core';
import { ParseService } from '../services/parse.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  teacherData: any[] = [];
  user: any;
  heart=faHeart;

  constructor(private parseService: ParseService) {}



ngOnInit() {
  this.loadCardData();
  this.user = this.parseService.user;
}

async loadCardData(){
  try {
    console.log('inside function');
    const responseData = await this.parseService.getCardData();
    console.log(responseData);
    this.teacherData = responseData;
    console.log('inside function q');
  } catch (error) {
    console.error('Error loading teacher Data', error);
  }
}

toggleHeart(data: any) {
  // Only proceed if the heart is currently inactive
  if (!data.heartActive) {
    data.heartActive = true; // Activate the heart icon when clicked

    this.addToFavourites(data).finally(() => {
      // Deactivate the heart icon after the operation (regardless of success or failure)
      data.heartActive = true;
    });
  }
}

async addToFavourites(data: any): Promise<void> {
  try {
    const response = await this.parseService.addFavourite(data.objectId , this.user.objectId);
    alert(response.message); // Show the message from the response
  } catch (error) {
    console.error('Error adding to favourites', error);
    // Handle error (e.g., show an error message)
  }
}



}
