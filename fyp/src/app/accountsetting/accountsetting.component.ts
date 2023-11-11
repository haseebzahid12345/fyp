import { Component } from '@angular/core';
import { ParseService } from '../services/parse.service';

@Component({
  selector: 'app-accountsetting',
  templateUrl: './accountsetting.component.html',
  styleUrls: ['./accountsetting.component.css']
})
export class AccountsettingComponent {
  constructor(private parseService: ParseService) {}
   
  async deleteAccount() {
    try {
      console.log("in delete");
      await this.parseService.deleteCurrentUser();
    } catch (error) {
      console.error('Error while deleting account:', error);
    }
  }
}
