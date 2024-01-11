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
    
    

     await this.parseService.signup(name,email,password);
     alert('user created successfully ');
     this.router.navigate(['/login']);
   

  }

}

