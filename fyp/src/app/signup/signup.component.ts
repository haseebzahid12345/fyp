import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { ParseService } from '../services/parse.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor (private router: Router , private service:ParseService) {}

  async signup(firstname: string , lastname : string , email:string  , password:string )
  {
     await this.service.signup(firstname,lastname,email,password)
     return true;
  }

}
