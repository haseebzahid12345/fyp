import { Component } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  filter = faFilter;
  search = faSearch;
  isMenuOpened: boolean = false;
  toggleMenu(): void{
    this.isMenuOpened =!this.isMenuOpened; 
  }
  clickedOutside(): void{
    this.isMenuOpened =false;
  }
}
