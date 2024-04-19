// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-favorites',
//   templateUrl: './favorites.component.html',
//   styleUrls: ['./favorites.component.css']
// })
// export class FavoritesComponent {

// }




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
    this.liveQuery();
    this.loadFavorites();
    
  }
  async liveQuery()
  {
    try {
      this.liveResult = await this.parseService.liveQueryFavourite();
      console.log(this.liveResult);
    } catch (error) {
      console.error('Error live query in parse service', error);
      // Handle error (e.g., show an error message)
    }
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
      console.log(objectId);
      event.stopPropagation();
     
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

