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
  pictur:string="";

  constructor(private parseService: ParseService) {}

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

ngOnInit() {
  this.loadCardData();
  this.user = this.parseService.user;
}

async loadCardData(){
  try {
    console.log('inside function');
    const responseData = await this.parseService.getGigData();
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
    console.log(data.objectId,"i got objectId for favourites");
    
    this.addToFavourites(data).finally(() => {
      data.heartActive = false;
    });
  }
  else if (data.heartActive) {
    data.heartActive = false; // Activate the heart icon when clicked
    console.log(data.userId, data.objectId , this.user.objectId , "i got objectId for favourites");
    // this.addToFavourites(data).finally(() => {
     
    //   data.heartActive = true;
    // });
    
  }

}

async addToFavourites(data: any): Promise<void> {
  try {
    console.log(data.objectId,"ok i objeded");
    const response = await this.parseService.addFavourite(data.objectId , this.user.objectId);
    alert(response.message); // Show the message from the response
  } catch (error) {
    console.error('Error adding to favourites', error);
    // Handle error (e.g., show an error message)
  }
}
}
