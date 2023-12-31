// import { Injectable } from '@angular/core';
// import * as Parse from 'parse' ;

// @Injectable({
//   providedIn: 'root'
// })
// export class ParseService {

//   constructor() {
//     Parse.initialize('myAppId', 'myMasterKey');
// (Parse as any).serverURL = 'http://localhost:1336/parse';
//    }


//    async signup(firstname:string , lastname:string , email:string ,password:string  ){
//     const params ={firstname,lalstname,email,password};
//     await Parse.Cloud.run("addUser" , params)
//    }

   
//    async login(email: string, password: string) {
//     const params ={email,password};
//     const response = await Parse.Cloud.run("login" , params);
//     if(response.status === 1) {
//       this.currentUser = response;
//     }
//     return response.status;
// }

//   private currentUser: any;

// get user() {
//   return this.currentUser;
// }
// set user(value: any) {
//   this.currentUser = value;
// }

// async deleteCurrentUser() {
//   console.log('Current user:', this.currentUser ,  );
//   if (this.currentUser && this.currentUser.objectId) {
//     console.log( this.currentUser.id)
//     alert('your account has been deleted!');
//     await Parse.Cloud.run("deleteUser", { objectId: this.currentUser.objectId });
   
//     // this.currentUser = null; // Reset current user
//   } else {
//     // throw new Error("No user is currently logged in.");
//     alert('No user is currently logged in.');
//   }
// }

// async updateCurrentUser(firstname: string, lastname: string) {
//   if (this.currentUser && this.currentUser.objectId) {
//     const params = { objectId: this.currentUser.objectId, firstname, lastname };
//     await Parse.Cloud.run("updateUser", params);
//   } else {
//     alert('No user is currently logged in.');
//   }
// }
// }





import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class ParseService {
  private readonly USER_KEY = 'currentUser';
  private currentUser: any;

  constructor() {
    Parse.initialize('myAppId', 'myMasterKey');
    (Parse as any).serverURL = 'http://localhost:1336/';

    // Retrieve the user from local storage on service initialization
    const storedUser = localStorage.getItem(this.USER_KEY);
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  async signup(name: string, email: string, password: string) {
    const params = { name , email, password };
    await Parse.Cloud.run('addUser', params);  
  }

  async login(email: string, password: string) {
    const params = { email, password };
    const response = await Parse.Cloud.run('login', params);
    if (response.status === 1) {
      this.currentUser = response;
      // Save user to local storage on successful login
      localStorage.setItem(this.USER_KEY, JSON.stringify(response));
    }
    return response.status;
  }

  get user() {
    return this.currentUser;
  }

  set user(value: any) {
    this.currentUser = value;
  }

  async deleteCurrentUser() {
    console.log('Current user:', this.currentUser);
    if (this.currentUser && this.currentUser.objectId) {
      console.log(this.currentUser.id);
      alert('Your account has been deleted!');
      await  Parse.Cloud.run('deleteUser', { objectId: this.currentUser.objectId }); 
      // Remove user from local storage on logout
      
    } else {
      alert('No user is currently logged in.');
    }
  }

  async deleteCurrentUser2() {
    console.log('Current user:', this.currentUser);
    if (this.currentUser && this.currentUser.objectId) {
      // Remove user from local storage on logout
      alert('Your have been loged out!');
      localStorage.removeItem(this.USER_KEY);
      // await Parse.Cloud.run('deleteUser', { objectId: this.currentUser.objectId });
      return true;
    } 
     else {
     alert('No user is currently logged in.');
     return false;

    }
  }

  async updateCurrentUser(firstname: string, lastname: string) {
    if (this.currentUser && this.currentUser.objectId) {
      const params = { objectId: this.currentUser.objectId, firstname, lastname };
      alert('Account Updated Successfully !!!');
      await Parse.Cloud.run('updateUser', params);
    } else {
      alert('No user is currently logged in.');
    }
  }

  async addFavourite(CardObjectId: string, currentUserObjectId: string): Promise<any> {
    const params = { CardObjectId, currentUserObjectId };
    return await Parse.Cloud.run('addFavourite', params);
  }
  

  async getCardData(): Promise<any[]> {
    try {

        const results = await Parse.Cloud.run("getCardData");
        console.log('Results from Cloud Code:', results);
        
        return results;
    } catch (error) {
        console.error('Error fetching teacher data from Cloud Code', error);
        throw error; // Propagate the error to the calling code if needed
    }
  }

  async getFavorites(): Promise<any[]> {
    try {
      if (this.currentUser && this.currentUser.objectId) {
        const params = { userId: this.currentUser.objectId };
        const results = await Parse.Cloud.run("getFavorites", params);
        console.log('Favorites from Cloud Code:', results);
        return results;
      } else {
        throw new Error('No user is currently logged in.');
        alert ('no user is currently log in');
      }
    } catch (error) {
      console.error('Error fetching favorites from Cloud Code', error);
      throw error;
    }
  }
  
  async removeFavorite(objectId: string): Promise<void> {
    try {
       const response = await Parse.Cloud.run('removeFavorite', { objectId });
      
       alert('succefful detete favourite');
    } catch (error) {
      console.error('Error removing favorite from the database', error);
      throw error;
    }
  }

}

