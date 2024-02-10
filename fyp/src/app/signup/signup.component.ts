import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { ParseService } from '../services/parse.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor (private router: Router , private parseService:ParseService) {
 
  }


  async signup(name: string , email:string  , password:string )
  {
const result = await this.parseService.signup(name,email,password);
    if (result.status===0)
    {
     alert(result.message);
    }
    else{
    alert('user created successfully ');
    this.router.navigate(['/login']);
    }
  
  }
}

