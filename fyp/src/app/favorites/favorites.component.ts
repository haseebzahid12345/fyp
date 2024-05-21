import { Component, OnInit } from '@angular/core';
import { ParseService } from '../services/parse.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteCards: any[] = [];
  liveResult:any;
 

  constructor(private parseService: ParseService) {}

  ngOnInit() {
    this.subscribeToLiveQuery();
    this.loadFavorites();
    
  }
  subscribeToLiveQuery() {
    this.parseService.subscribeToFavourites().then(subscription => {
      // Subscription is active now, you can store it if you need to unsubscribe later
    }).catch(error => {
      console.error('Error subscribing to favourites', error);
    });
  }

  async loadFavorites() {
    try {
      this.favoriteCards = await this.parseService.getFavorites();
    } catch (error) {
      console.error('Error loading favorites', error);
      // Handle error (e.g., show an error message)
    }
  }

  async removeFavorite(event: MouseEvent, objectId: string): Promise<void> {
    try {
      event.stopPropagation();
      console.log(objectId);
       await this.parseService.removeFavorite(objectId);
      
      console.log('inside favourutes removal');
      // if (response) {
      //   alert('It has been removed from favourites');
      // }
      
    } catch (error) {
      console.error('Error removing favorite from the database', error);
      alert(objectId);
      alert('Error removing favorite');

      throw error;
    }
  }
}

