import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { ParseService } from '../services/parse.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // passwordPattern: RegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

  // emailError: string = '';
  // passwordError: string = '';
  constructor (private router: Router , private service:ParseService) {}
  
  async signup(firstname: string , lastname : string , email:string  , password:string )
  {
    
     alert('user created successfully ');
     this.router.navigate(['/login']);
    // // this.passwordError = '';
    // this.emailError = '';
   
    // if (!this.emailPattern.test(email)) {
    //   this.emailError = 'Incorrect email format (e.g., abc@gmail.com)';
    //   return;
    // }


    // if (!this.passwordPattern.test(password)) {
    //   this.passwordError = 'Password should be 8 characters long with letters and numbers';
    //   return;
    // }
     await this.service.signup(firstname,lastname,email,password)
     return true;

  }

}
