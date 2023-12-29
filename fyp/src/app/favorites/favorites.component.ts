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
 

  constructor(private parseService: ParseService) {}

  ngOnInit() {
    this.loadFavorites();
  }

  async loadFavorites() {
    try {
      this.favoriteCards = await this.parseService.getFavorites();
    } catch (error) {
      console.error('Error loading favorites', error);
      // Handle error (e.g., show an error message)
    }
  }

  async removeFavorite(objectId: string): Promise<void> {
    try {
      const response = await Parse.Cloud.run('removeFavorite', { objectId });
      console.log(objectId);
      console.log('inside favourutes removal');
      if (response.success) {
        alert('It has been removed from favourites');
      }
    } catch (error) {
      console.error('Error removing favorite from the database', error);
      alert(objectId);
      alert('Error removing favorite');

      throw error;
    }
  }
}
