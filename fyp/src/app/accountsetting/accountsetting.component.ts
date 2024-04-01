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
    // Ask the user for confirmation before deleting the account
    const confirmation = confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (confirmation) {
      try {
        console.log("in delete");
        await this.parseService.deleteCurrentUser();
        alert('Account deleted successfully.');
        // Navigate the user away from the current page or refresh the application state as needed
      } catch (error) {
        console.error('Error while deleting account:', error);
        alert('There was an error deleting your account. Please try again later.');
      }
    } else {
      // User clicked 'Cancel', do not delete the account
      console.log("Account deletion cancelled.");
      alert("Account deletion cancelled.");
    }
  }
}
