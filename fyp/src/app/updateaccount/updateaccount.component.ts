import { Component } from '@angular/core';
import { ParseService } from '../services/parse.service';

@Component({
  selector: 'app-updateaccount',
  templateUrl: './updateaccount.component.html',
  styleUrls: ['./updateaccount.component.css']
})
export class UpdateaccountComponent {
  constructor(private parseService: ParseService) {}
  currentName: string = '';
  ngOnInit() {
    this.fetchCurrentUserName();
  }

  async fetchCurrentUserName() {
    const result = await this.parseService.getCurrentUserName();
    if (result.status===1) {
      
      this.currentName = result.name;
      console.log(this.currentName);
       // Set the current name if fetched
    }
  }

  async updateUser(name: string) {
    try {
      await this.parseService.updateCurrentUser(name);
    } catch (error) {
      console.error('Error while updating account:', error);
    }
  }
}
