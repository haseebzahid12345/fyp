import { Injectable } from '@angular/core';
import * as Parse from 'parse' ;

@Injectable({
  providedIn: 'root'
})
export class ParseService {

  constructor() {
    Parse.initialize('myAppId', 'myMasterKey');
(Parse as any).serverURL = 'http://localhost:1336/parse';
   }
   async signup(firstname:string , lastname:string , email:string ,password:string  ){
    const params ={firstname,lastname,email,password};
    await Parse.Cloud.run("addUser" , params)
   }

   
   async login(email: string, password: string) {
    const params ={email,password};
    const response = await Parse.Cloud.run("login" , params);
    if(response.status === 1) {
      this.currentUser = response;
    }
    return response.status;
}

  private currentUser: any;

get user() {
  return this.currentUser;
}

set user(value: any) {
  this.currentUser = value;
}
async deleteCurrentUser() {
  console.log('Current user:', this.currentUser ,  );
  if (this.currentUser && this.currentUser.objectId) {
    console.log( this.currentUser.id)
    alert('your account has been deleted!');
    await Parse.Cloud.run("deleteUser", { objectId: this.currentUser.objectId });
   
    // this.currentUser = null; // Reset current user
  } else {
    // throw new Error("No user is currently logged in.");
    alert('No user is currently logged in.');
  }
}
}
