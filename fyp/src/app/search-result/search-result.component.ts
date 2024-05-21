import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParseService } from '../services/parse.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {

  teacherData: any[] = [];
  favorites: any[] = [];
  title : string ='';
  heart=faHeart;
  star=faStar;
  user: any;
  constructor(private route: ActivatedRoute  , private serviceParse : ParseService) {}
  
  ngOnInit() {
    this.user =  this.serviceParse.user;
    this.route.queryParams.subscribe(params => {
      this.title= params['query'];
      console.log(this.title , "title");
      this.loadInitialData();
    });

}

async getCardForTitles(title :string ){
const result = await this.serviceParse.getCardForTitles(title)
console.log(result,'result');
this.teacherData = result;
this.markFavorites();
}

markFavorites() {
  // Assume favorites and cards are loaded at this point
  const favoriteIds = this.favorites.map(fav => fav.gig.objectId); // Extract favorite gig IDs
  this.teacherData.forEach(card => {
    card.heartActive = favoriteIds.includes(card.objectId);  // Mark card as favorite if ID is in favorites
  });
}

async loadInitialData() {
  try {
    await this.loadFavorites();  // Load favorites first
    await this.getCardForTitles(this.title);   // Then load card data
  } catch (error) {
    console.error('Error loading initial data', error);
  }
}

async loadFavorites() {
  this.favorites = await this.serviceParse.getFavorites();
}

toggleHeart(event: MouseEvent, data: any) {
  //  this.parseService.clickEvent(localStorage['appSessionId'],'clicked on heart', this.pageViewID)
  //  console.log(localStorage['appSessionId'],"dewdw");;
  event.stopPropagation();
  data.heartActive = !data.heartActive;
  if (data.heartActive) {

    this.addToFavourites(data.objectId);
  } else {
    this.removeFromFavorites(event , data.objectId );  // Implement this method similar to addToFavourites
  }
}

async removeFromFavorites(event: MouseEvent , id: string ): Promise<void> {
  try {
    console.log(id);
    event.stopPropagation();
   
     await this.serviceParse.removeFavorite(id);
    
    console.log('inside favourutes removal');
    // if (response) {
    //   alert('It has been removed from favourites');
    // }
    
  } catch (error) {
    console.error('Error removing favorite from the database', error);
    alert('Error removing favorite');

    throw error;
  }
}


async addToFavourites(id: string): Promise<void> {
  console.log(id,"objectId");
  try {
    console.log(id,"ok i objeded");
    console.log(this.user.objectId,"iddddd");
    const response = await this.serviceParse.addFavourite(id , this.user.objectId);
    alert(response.message); // Show the message from the response
  } catch (error) {
    console.error('Error adding to favourites', error);
    // Handle error (e.g., show an error message)
  }
}
}