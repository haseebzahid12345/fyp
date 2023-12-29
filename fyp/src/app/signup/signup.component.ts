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
  
  async signup(name: string , email:string  , password:string )
  {
    
     alert('user created successfully ');
     this.router.navigate(['/login']);

     await this.service.signup(name,email,password)
     return true;

  }

}

