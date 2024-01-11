import { Component } from '@angular/core';
import { ParseService } from '../services/parse.service';

@Component({
  selector: 'app-updateaccount',
  templateUrl: './updateaccount.component.html',
  styleUrls: ['./updateaccount.component.css']
})
export class UpdateaccountComponent {
  constructor(private parseService: ParseService) {}
  async updateUser(name: string) {
    try {
      await this.parseService.updateCurrentUser(name);
    } catch (error) {
      console.error('Error while updating account:', error);
    }
  }
}
