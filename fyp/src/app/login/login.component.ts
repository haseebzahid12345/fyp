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
this.test();
    
   }
test()
{
  this.onLogin("abc@gmail.com", "123");
}
  onLogin(email: string, password: string) {
    console.log("in login");
    Parse.Cloud.run("login", {email: email, password: password}).then((user: any) => {
      console.log("Function called");
      if(user==1){
        alert('Login successful ');
        // Use the router here to navigate after successful login
        //this.router.navigate(['/home']);
      }
     
    })
  }
}
