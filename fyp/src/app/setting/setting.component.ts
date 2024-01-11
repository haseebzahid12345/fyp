import { Component , OnInit} from '@angular/core';
import { ParseService } from '../services/parse.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  
  user: any;
 
  constructor(private parseService: ParseService ,  private router: Router) {}
  ngOnInit() {
    this.user = this.parseService.user;
  }

  async logout() {
    // Call the deleteCurrentUser method which removes the user from local storage
   await  this.parseService.deleteCurrentUser2();
  
    // You can also navigate to the login page or any other desired route after logout
    this.router.navigate(['/home']);
  }
}
