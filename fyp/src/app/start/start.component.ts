import { Component } from '@angular/core';
import { ParseService } from '../services/parse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  user: any;
  private readonly USER_KEY = 'currentUser';
  private currentUser: any;
  constructor(private parseService: ParseService ,  private router: Router) {
    const storedUser = localStorage.getItem(this.USER_KEY);
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  ngOnInit() {
    this.user = this.parseService.user;
    localStorage.removeItem(this.USER_KEY);
  }

}
