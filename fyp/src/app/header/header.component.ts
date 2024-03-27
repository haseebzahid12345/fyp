import { Component } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ParseService } from '../services/parse.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user: any;
  filter = faFilter;
  search = faSearch;
  isMenuOpened: boolean = false;
  pictur:string="";
  constructor(private parseService: ParseService) {}
  ngOnInit() {
    this.user = this.parseService.user.objectId;
    
    this.fetchMUserData();
  }

  async fetchMUserData() {
    try {
      const result = await this.parseService.getMUserById(this.user);
      
      if (result.status === 1) {

    
       this.pictur = result.image;
       console.log(this.pictur);
       
      } else {
     
      }
    } catch (error) {
      console.error('Error fetching MUser details', error);
    }
    }
  toggleMenu(): void{
    this.isMenuOpened =!this.isMenuOpened; 
  }
  clickedOutside(): void{
    this.isMenuOpened =false;
  }
}
