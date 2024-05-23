import { Component , OnInit } from '@angular/core';
import { ParseService } from '../services/parse.service';
import { DatePipe } from '@angular/common';
import { interval } from 'rxjs';


@Component({
  selector: 'app-current-orders',
  templateUrl: './current-orders.component.html',
  styleUrl: './current-orders.component.css'
})
export class CurrentOrdersComponent implements OnInit {

  orders: any[] = []; // Using any for simplicity
  user:any;
  orderId:string='';
  constructor(private parseService: ParseService ,  public datePipe: DatePipe) {
 
  }

 

  ngOnInit() {
    this.loadOrders();
    this.user = this.parseService.user;
    interval(1000).subscribe(() => {
      this.updateTimers();
    });
  }

  async onCancel(id:string){
    const confirmation = confirm('Are you sure you have cancel the order? This action cannot be undone. 2 percent will be deducted from your original transaction ');
    if(confirmation){
  this.orderId=id;
   const result = await  this.parseService.onCancelFunction(this.orderId);
   if(result.status==1){
    alert('order cancelled');
   }
  else{
    alert('error in cancelling order');
  }
       
    }
  }


  updateTimers() {
    const now = new Date();
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  
    this.orders.forEach(order => {
      const createdAt = new Date(order.created);
      const totalMilliseconds = order.orderDay * millisecondsPerDay;
      const halfTimeMilliseconds = Math.floor(totalMilliseconds / 2);
  
      const deadline = new Date(createdAt.getTime() + totalMilliseconds);
      const deadlineForCancel = new Date(createdAt.getTime() + halfTimeMilliseconds);
  
      order.timeLeftForCancel = this.getTimeRemaining(deadlineForCancel, now);
      order.timeLeft = this.getTimeRemaining(deadline, now);
  
      // Determine if the cancel button should be disabled
      order.disableCancel = Date.parse(now.toString()) > Date.parse(deadlineForCancel.toString());
    });
  }
  
  
  getTimeRemaining(endtime: Date, now: Date) {
    let total = Date.parse(endtime.toString()) - Date.parse(now.toString());
    const seconds = Math.floor((total / 1000) % 60);
    total -= seconds * 1000;
    const minutes = Math.floor((total / 1000 / 60) % 60);
    total -= minutes * 1000 * 60;
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    total -= hours * 1000 * 60 * 60;
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
    return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  }
  
  async loadOrders() {
    try {
      console.log('inside function');
      this.orders = await this.parseService.getOrders();
      console.log(this.orders);
      console.log('inside function q');
    } catch (error) {
      console.error('Error loading orders', error);
    }
  }

 

}
