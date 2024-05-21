// header.component.ts
import { Component, OnInit } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ParseService, TitlesResponse, TitleData } from '../services/parse.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeCategory: any = null;
  user: any;
  filter = faFilter;
  search = faSearch;
  isMenuOpened: boolean = false;
  searchTerm: string = '';
  titles: TitleData[] = [];
  filteredTitles: TitleData[] = [];
  pictur: string = "";

  constructor(private parseService: ParseService , private router: Router) {}

  ngOnInit() {
    this.user = this.parseService.user.objectId;
    this.fetchTitles();
    this.fetchMUserData();
  }

  async fetchTitles() {
    try {
      const result: TitlesResponse = await this.parseService.getTitles();
      if (result.status === 1) {
        this.titles = result.data;
        console.log(this.titles);
      } else {
        console.error('Error fetching titles');
      }
    } catch (error) {
      console.error('Error fetching titles', error);
    }
  }

  onSearchChange() {
    if (this.searchTerm) {
      this.filteredTitles = this.titles.filter(title =>
        title.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      ).slice(0, 5); // Limit to 5 suggestions
    } else {
      this.filteredTitles = [];
    }
  }

  async fetchMUserData() {
    try {
      const result = await this.parseService.getMUserById(this.user);
      if (result.status === 1) {
        this.pictur = result.image;
      } else {
        console.error('Error fetching MUser details');
      }
    } catch (error) {
      console.error('Error fetching MUser details', error);
    }
  }

  clickedOutside(): void {
    this.isMenuOpened = false;
  }

  onSuggestionClick(title: string) {
    this.router.navigate(['/search-result'], { queryParams: { query: title } });
  }
}
