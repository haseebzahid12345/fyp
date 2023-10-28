import { Component } from '@angular/core';
import { ParseService } from '../services/parse.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: any;

  constructor(private parseService: ParseService) {}

  ngOnInit() {
    this.user = this.parseService.user;
  }
}
