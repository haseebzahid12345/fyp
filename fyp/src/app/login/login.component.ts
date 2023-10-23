import { Component } from '@angular/core';
import { ParseService } from '../services/parse.service';// Update with the actual path
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html' // Update with the actual path
})
export class LoginComponent {

  constructor(private parseService: ParseService) { }

 
  onLogin(email: string, password: string) {
    this.parseService.login(email, password).then((user) => {
      // this.router.navigate(['/home']);
      alert('Login successful ');
      console.log('1');
    }).catch((error:any) => {
      alert('incorrect name or password');
      // Handle login error, display an error message to the user, etc.
      console.error("Login failed: " + error.message);
      console.log('error 1');
   
    });
  }
}
