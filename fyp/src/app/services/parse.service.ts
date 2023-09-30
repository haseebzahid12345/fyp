import { Injectable } from '@angular/core';
import * as Parse from 'parse' ;
// npm install parse --save
// npm install @types/parse --save-dev

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
}
