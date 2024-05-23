import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParseService } from '../services/parse.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrl: './category-display.component.css'
})
export class CategoryDisplayComponent implements OnInit {
  heart=faHeart;
  category : string ='';
  subcategory : string = '';
  gigs: any[] = []; 
  favorites: any[] = [];
  user: any;
constructor(private route: ActivatedRoute  , private serviceParse : ParseService) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.subcategory= params['subcategory'];
      this.category = params['category'];
    });

    // ....(8)....ye info ati ha  return {
     // status: 1, name: user.get('name'), objectId: user.id, image:user.get('image')};} else {   return { status: 0 };}
    this.user = this.serviceParse.user;
    this.loadInitialData();
     
  }
  async loadInitialData() {
    try {
      await this.loadFavorites();  // Load favorites first
      await this.getCardsWithCategory();   // Then load card data
    } catch (error) {
      console.error('Error loading initial data', error);
    }
  }

  async loadFavorites() {
    //...(16)... info deta hu userId ki studentki then info leta hu arrays ki surat me cardId , title , homePrice , name(teacher) ki
    this.favorites = await this.serviceParse.getFavorites();
  }

   async getCardsWithCategory(){
    try {
      //......(5) category aur subcategory de kr agar cards ke sath match kr gya ma phir fetch krwa lu ga wohi card 
      // info aae gi ..... cardId , title  , image1 , homePrice , averageRating , name (teacher) , image(teacher)
      // agar matching nahi ho gi phir status : 0 aae ga 
      const response = await this.serviceParse.getCardsWithCategory(this.category, this.subcategory);
      if (response.status && response.status === 0) {
        console.log('No gigs found.');
      } else {
        this.gigs = response.map((gig: any) => ({
          title: gig.title,
          image1: gig.image1,
          averageRating: gig.averageRating,
          userName: gig.userName,
          profileImage: gig.profileImage,
          homePrice: gig.homePrice,
          objectId : gig.objectId
        }));
        console.log(this.gigs); 
        this.markFavorites();
        // Optional: log the gigs array to see the data structure
      }
    } catch (error) {
      console.error('Failed to fetch gigs:', error);
    }
  }

  markFavorites() {
    // Assume favorites and cards are loaded at this point
    const favoriteIds = this.favorites.map(fav => fav.gig.objectId); // Extract favorite gig IDs
    this.gigs.forEach(card => {
      card.heartActive = favoriteIds.includes(card.objectId);  // Mark card as favorite if ID is in favorites
    });
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
    try {
      console.log(id,"ok i objeded");
      const response = await this.serviceParse.addFavourite(id , this.user.objectId);
      alert(response.message); // Show the message from the response
    } catch (error) {
      console.error('Error adding to favourites', error);
      // Handle error (e.g., show an error message)
    }
  }

   } 
  



