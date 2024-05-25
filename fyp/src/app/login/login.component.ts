import { Component , NgZone } from '@angular/core';
import { ParseService } from '../services/parse.service'; // Update with the actual path
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { CardDetailComponent } from '../card-detail/card-detail.component';
import { TransactionComponent } from '../transaction/transaction.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html' // Update with the actual path
})
export class LoginComponent {
  userLocation: string = '';
  country : string = '';
  city : string = '';

  constructor(private parseService: ParseService, private router: Router , private ngZone: NgZone , public app:AppComponent , public home : HomeComponent , public cardDetails : CardDetailComponent , public transaction : TransactionComponent)
   { 
   
   }

 async onLogin(email: string, password: string ) {
    // console.log("in login");
    // Parse.Cloud.run("login", {email: email, password: password}).then((user: any) => {
      const user = await this.parseService.login(email, password);
  if (user==1) {
    alert('Login successful ');

    this.router.navigate(['/home']);
   
  } if(user==0) {
    // handle login failure
    alert('incorrect name or password');
  }
  }

  

}
