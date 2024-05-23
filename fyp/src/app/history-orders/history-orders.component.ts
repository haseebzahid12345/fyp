import { Component } from '@angular/core';
import { ParseService } from '../services/parse.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-history-orders',
  templateUrl: './history-orders.component.html',
  styleUrl: './history-orders.component.css'
})
export class HistoryOrdersComponent {
  selectedRating: number = 0;

 


  orders: any[] = [];
  reviewForms: FormGroup[] = [];

  user: any;
  orderId: string = '';

  constructor(private parseService: ParseService ,private fb: FormBuilder,public datePipe: DatePipe) { }

  ngOnInit() {
    this.loadOrders();
    this.user = this.parseService.user;
  }
  async loadOrders() {
    try {
      this.orders = await this.parseService.getHistoryOrders();
      this.orders.forEach(order => {
        order.timeCompletion = this.timeCompletion(order.orderDate, order.completion);
        order.tempRate = order.rating || 0;  // Use existing rating or initialize to 0
        order.tempReview = order.review || ''; 
        order.tempCompletionConfirm = order.completionConfirm || 0; // Use existing review or initialize to empty string
      });
      console.log(this.orders);
    } catch (error) {
      console.error('Error loading orders', error);
    }
  }
  
  updateRating(order: any, value: number) {
    order.tempRate = value;
  }

  saveOrder(order: any) {
    // Here you need to implement the actual save logic, which might involve calling a backend service
    // Assuming updateOrder on ParseService takes order ID and update payload
    this.parseService.updateOrder(order.objectId, order.tempRate , order.tempReview , order.tempCompletionConfirm).then(() => {
      order.rating = order.tempRate;
      order.review = order.tempReview;
      order.completionConfirm = order.tempCompletionConfirm;
      console.log('Order saved:', order.objectId);
    })
  }
  

  timeCompletion(orderDate: string, completionDate: string): string {
    const orderDateObj = new Date(orderDate);
    const completionDateObj = new Date(completionDate);

    // Calculate the difference in milliseconds
    const diff = completionDateObj.getTime() - orderDateObj.getTime();

    // Calculate days, hours, minutes
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days} day${days !== 1 ? 's' : ''} ${hours} hour${hours !== 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`;
  }

}
