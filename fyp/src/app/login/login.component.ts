import { Component } from '@angular/core';
import { ParseService } from '../services/parse.service'; // Update with the actual path
import { Router } from '@angular/router';
import * as Parse from 'parse' ;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html' // Update with the actual path
})
export class LoginComponent {
  

  constructor(private parseService: ParseService, private router: Router)
   { 
    Parse.initialize('myAppId', 'myMasterKey');
(Parse as any).serverURL = 'http://localhost:1336/parse';
console.log("Comnstructor");
   }

 async onLogin(email: string, password: string) {
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
