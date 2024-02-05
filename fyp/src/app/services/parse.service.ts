


import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { Message } from '../chat-page/message.model';

@Injectable({
  providedIn: 'root'
})
export class ParseService {
  private readonly USER_KEY = 'currentUser';
  private currentUser: any;

  constructor() {
    Parse.initialize('myAppId', 'myMasterKey');
    (Parse as any).serverURL = 'http://localhost:1336/parse';

    // Retrieve the user from local storage on service initialization
    const storedUser = localStorage.getItem(this.USER_KEY);
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  async signup(name: string, email: string, password: string) {
    const params = { name , email, password };
    await Parse.Cloud.run('addUserStudent', params);  
    
  }

  async login(email: string, password: string) {
    const params = { email, password };
    const response = await Parse.Cloud.run('loginStudent', params);
    if (response.status === 1) {
      this.currentUser = response;
      // Save user to local storage on successful login
      localStorage.setItem(this.USER_KEY, JSON.stringify(response));
    }
    return response.status;
  }

  async getConversationID(TeacherID: string, StudentID: string) {
    const params = { TeacherID, StudentID };
    const response = await Parse.Cloud.run('getConversationIDStudent', params);
    return response.objectId;
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
      await  Parse.Cloud.run('deleteUserStudent', { objectId: this.currentUser.objectId }); 
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

  async updateCurrentUser(name: string) {
    if (this.currentUser && this.currentUser.objectId) {
      const params = { objectId: this.currentUser.objectId , name};
      alert('Account Updated Successfully !!!');
      await Parse.Cloud.run('updateUserStudent', params);
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

  async getCardById(id: string): Promise<any> {
    try {
      const response = await Parse.Cloud.run('getCardById', { id });
      return response;
    } catch (error) {
      console.error('Error fetching card by ID from Cloud Code', error);
      throw error;
    }
  }


  async sendMessage(senderId: string, receiverId: string, text: string) {
    try {
      const message = await Parse.Cloud.run('sendMessageStudent', { senderId, receiverId, text });
      return message;
    } catch (error) {
      console.error('Error sending message', error);
      throw error;
    }
  }


  async getMessages(conversationId: string): Promise<Message[]> {
    try {
      const messages = await Parse.Cloud.run('getMessagesStudent', { conversationId });
      console.log(messages);
      return messages;
    } catch (error) {
      console.error('Error getting messages', error);
      throw error;
    }
  }

  async getTeacherNamesByIds(teacherIds: string[]): Promise<string[]> {
    const params = { teacherIds };
    const response = await Parse.Cloud.run('getTeacherNamesByIds', params);
    console.log(response, 'name gets in parse')
    return response;

  }

  async getTeacherById(id: string): Promise<any> {
    try {
      const response = await Parse.Cloud.run('TeacherDataByIds', { id });
      return response;
    } catch (error) {
      console.error('Error fetching card by ID from Cloud Code', error);
      throw error;
    }
  }

  async getTeacherIdsByStudentId(studentId: string): Promise<string[]> {
    const params = { studentId };
    const studentIds = await Parse.Cloud.run('getTeacherIdsByStudent', params);
    // Filter out any null or undefined values just in case
    // return studentIds.filter(id => id != null && id !== undefined);
    // In parse.service.ts
  
    return studentIds;
  }

}

