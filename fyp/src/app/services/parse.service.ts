


import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { Message } from '../chat-page/message.model';

export interface TitleData {
  title: string;
  cardId: string;
}

export interface TitlesResponse {
  status: number;
  data: TitleData[];
  message?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ParseService {
  private readonly USER_KEY = 'currentUser';
  private currentUser: any;

  constructor() {
    Parse.initialize('myAppId', 'myMasterKey');
    (Parse as any).serverURL = 'https://fyp-teachers-backed.onrender.com';
    (Parse as any).liveQueryServerURL = 'ws://localhost:1337/parse';
    // Retrieve the user from local storage on service initialization
    const storedUser = localStorage.getItem(this.USER_KEY);
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }


  // (1)
  async signup(name: string, email: string, password: string) {
    const params = { name, email, password };
    const status = await Parse.Cloud.run('addUserStudent', params);
    console.log(status, "this is status");
    return status;
  }



  // (2)
  async updateOrder(id: string, rating: number, review: string, completionPercent: number) {
    const params = { id, rating: rating.toString(), review, completionPercent: completionPercent.toString() };
    const status = await Parse.Cloud.run('updateOrders', params);
    console.log(status, "this is status");
    return status;
  }

  // (3)
  async getOrders(): Promise<any[]> {
    try {
      const params = { userId: this.user.objectId }
      const results = await Parse.Cloud.run("getOrders", params);
      console.log('Results from Cloud Code:', results);
      return results;
    } catch (error) {
      console.error('Error fetching orders from Cloud Code', error);
      throw error; // Propagate the error to the calling code if needed
    }
  }



  // (4) 
  async getHistoryOrderDetails(cardId: string) {
    const params = { cardId };
    const response = await Parse.Cloud.run('getHistoryOrderDetails', params);
    return response;
  }


  // (5) 
  async getCardsWithCategory(category: string, subcategory: string) {
    const params = { category, subcategory };
    const response = await Parse.Cloud.run('getCardsWithCategory', params);
    return response;
  }


  // (6)
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


  async subscribeToFavourites() {
    const query = new Parse.Query('favourites');
    const subscription = await query.subscribe();

    subscription.on('open', () => {
      console.log('LiveQuery subscription opened');
    });

    subscription.on('create', (object) => {
      console.log('New favourite created:', object);
      // Update local data or UI here
    });

    subscription.on('update', (object) => {
      console.log('Favourite updated:', object);
      // Update local data or UI here
    });

    subscription.on('delete', (object) => {
      console.log('Favourite deleted:', object);
      // Update local data or UI here
    });

    subscription.on('close', () => {
      console.log('LiveQuery subscription closed');
    });

    return subscription;  // You might return this if you need to manage subscription elsewhere
  }


  // (7)
  async getConversationID(TeacherID: string, StudentID: string) {
    const params = { TeacherID, StudentID };
    const response = await Parse.Cloud.run('getConversationIDStudent', params);
    return response.objectId;
  }


  // (8)
  get user() {
    return this.currentUser;
  }

  set user(value: any) {
    this.currentUser = value;
  }


  // (9)
  async deleteCurrentUser() {
    console.log('Current user:', this.currentUser);
    if (this.currentUser && this.currentUser.objectId) {
      console.log(this.currentUser.id);
      await Parse.Cloud.run('deleteUserStudent', { objectId: this.currentUser.objectId });
      // Remove user from local storage on logout

    } else {
      alert('No user is currently logged in.');
    }
  }


  // (10)
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


  // (11)
  async getProfileById(id: string): Promise<any> {
    try {
      const response = await Parse.Cloud.run('getProfileById', { id });
      return response;
    } catch (error) {
      console.error('Error fetching profile by ID from Cloud Code', error);
      throw error;
    }
  }


  // (12)
  async updateCurrentUser(name: string) {
    if (this.currentUser && this.currentUser.objectId) {
      const params = { objectId: this.currentUser.objectId, name };
      alert('Account Updated Successfully !!!');
      await Parse.Cloud.run('updateUserStudent', params);
    } else {
      alert('No user is currently logged in.');
    }
  }


  // (13)
  async onCancelFunction(orderId: string) {
    try {
      const params = { orderId };
      const result = await Parse.Cloud.run("CancelOrdersStudent", params);
      return result;
    }
    catch (error) {
      throw error;
    }
  }



  // (14)
  async addFavourite(CardObjectId: string, currentUserObjectId: string): Promise<any> {
    const params = { CardObjectId, currentUserObjectId };
    console.log(CardObjectId, currentUserObjectId)
    return await Parse.Cloud.run('addFavourite', params);
  }



  // (15)
  async getGigData(): Promise<any[]> {
    try {

      const results = await Parse.Cloud.run("getGigData");
      // console.log('Results from Cloud Code:', results);

      return results;
    } catch (error) {
      console.error('Error fetching teacher data from Cloud Code', error);
      throw error; // Propagate the error to the calling code if needed
    }
  }

  // (16)
  async getFavorites(): Promise<any[]> {
    try {
      if (this.currentUser && this.currentUser.objectId) {
        const params = { userId: this.currentUser.objectId };
        const results = await Parse.Cloud.run("getFavorites", params);
        console.log(results);
        // console.log('Favorites from Cloud Code:', results);
        return results;
      } else {
        throw new Error('No user is currently logged in.');

      }
    } catch (error) {
      console.error('Error fetching favorites from Cloud Code', error);
      throw error;
    }
  }

  // (17)
  async removeFavorite(cardId: string): Promise<void> {
    try {
      const response = await Parse.Cloud.run('removeFavorite', { cardId });

      alert('succefful detete favourite');
    } catch (error) {
      console.error('Error removing favorite from the database', error);
      throw error;
    }
  }

  // (18)
  async getGigById(id: string): Promise<any> {
    try {
      const response = await Parse.Cloud.run('getGigByUserId', { id });
      return response;
    } catch (error) {
      console.error('Error fetching card by ID from Cloud Code', error);
      throw error;
    }
  }


  // (19)
  async getAllData(): Promise<any> {
    try {
      const excelBuffer = await Parse.Cloud.run('getAllData');
      return excelBuffer;
    } catch (error) {
      console.error('Error getting All data', error);
      throw error;
    }
  }

  // (20)
  async getGigByIdd(id: string): Promise<any> {
    try {
      const response = await Parse.Cloud.run('getGigById', { id }) as any[];
      return response;
    } catch (error) {
      console.error('Error fetching card by ID from Cloud Code', error);
      throw error;
    }
  }

  // (21)
  async orderPlace(cardId: string, teacherId: string, studentId: string, price: string, orderDay: string, title: string) {
    try {
      const params = { cardId, teacherId, studentId, price, orderDay, title };
      console.log(cardId, teacherId, studentId, price, orderDay);
      const response = await Parse.Cloud.run('orderPlace', params);
      return response;
    } catch (error) {
      console.error('Error taking order', error);
      throw error;
    }
  }

  async orderPlaceTransaction(cardId: string, teacherId: string, studentId: string, price: string, orderDay: string, title: string) {
    try {
      const params = { cardId, teacherId, studentId, price, orderDay, title };
      console.log(cardId, teacherId, studentId, price, orderDay);
      const response = await Parse.Cloud.run('orderPlaceTransaction', params);
      return response;
    } catch (error) {
      console.error('Error taking order', error);
      throw error;
    }
  }

  // (22)
  async update_submit_profile(image: string) {
    const params = { image, userId: this.currentUser.objectId }
    const result = await Parse.Cloud.run("update_image_student", params)
    return result;

  }


  // (23)
  async getMUserById(id: string): Promise<any> {
    try {
      const response = await Parse.Cloud.run('getMUserById', { id });
      return response;
    } catch (error) {
      console.error('Error fetching MUser by ID from Cloud Code', error);
      throw error;
    }
  }


  // (24)
  async getHistoryOrders(): Promise<any[]> {
    try {
      const params = { userId: this.user.objectId }
      const results = await Parse.Cloud.run("getHistoryOrdersStudent", params);
      console.log('Results from Cloud Code:', results);
      return results;
    } catch (error) {
      console.error('Error fetching orders from Cloud Code', error);
      throw error; // Propagate the error to the calling code if needed
    }
  }



  // (25)
  async sendMessage(senderId: string, receiverId: string, text: string) {
    try {
      const message = await Parse.Cloud.run('sendMessageStudent', { senderId, receiverId, text });
      return message;
    } catch (error) {
      console.error('Error sending message', error);
      throw error;
    }
  }

  // (26)
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

  // (27)
  async getTeacherDataByIds(teacherIds: string[]): Promise<string[]> {
    const params = { teacherIds };
    const response = await Parse.Cloud.run('getTeacherNamesByIds', params);
    console.log(response, 'name gets in parse')
    return response;

  }

  // (28)
  async getTeacherById(id: string): Promise<any> {
    try {
      const response = await Parse.Cloud.run('TeacherDataByIds', { id });
      return response;
    } catch (error) {
      console.error('Error fetching card by ID from Cloud Code', error);
      throw error;
    }
  }

  // (29)
  async getTeacherIdsByStudentId(): Promise<string[]> {
    const params = { studentId: this.currentUser.objectId };
    const studentIds = await Parse.Cloud.run('getTeacherIdsByStudent', params);
    // Filter out any null or undefined values just in case
    // return studentIds.filter(id => id != null && id !== undefined);
    // In parse.service.ts

    return studentIds;
  }

//30
  async getCancelOrders(): Promise<any[]> {
    try {
      const params = { userId: this.user.objectId }
      const results = await Parse.Cloud.run("getCancelOrders", params);
      console.log('Results from Cloud Code:', results);
      return results;
    } catch (error) {
      console.error('Error fetching orders from Cloud Code', error);
      throw error; // Propagate the error to the calling code if needed
    }
  }

  async getCardForTitles(title : string): Promise<any[]>{
    const params={title};
    const result = await Parse.Cloud.run("getCardsForTitle", params);
    return result;
  }

  //31
  async getIncompleteOrders(): Promise<any[]> {
    try {
      const params = { userId: this.user.objectId }
      const results = await Parse.Cloud.run("getIncompleteOrdersStudent", params);
      console.log('Results from Cloud Code:', results);
      return results;
    } catch (error) {
      console.error('Error fetching orders from Cloud Code', error);
      throw error; // Propagate the error to the calling code if needed
    }
  }

  async getTitles(): Promise<TitlesResponse> {
    try {
      const result = await Parse.Cloud.run("getTitles");
      return result as TitlesResponse;
    } catch (error) {
      console.error('Error fetching titles:', error);
      return {
        status: 0,
        data: [],
        message: 'Error fetching titles',
      };
    }
  }
  }




