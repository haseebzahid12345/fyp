import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ParseService } from '../services/parse.service';
@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent implements OnInit {
  price: string='';
  cardId : string ='';
  studentId: any;
  teacherId:string='';
  constructor(private route: ActivatedRoute , private router: Router , private service: ParseService) {}
   
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.price = params['price'];
      this.cardId = params['cardId'];
      this.teacherId = params['teacherId'];
      this.studentId = this.service.user.objectId;
    });
  }
  


  confirmOrder() {
    console.log("Order confirmed with price:", this.price);
    
    alert('Order has been confirmed!'); // Example action
    // this.router.navigate(['/confirmation']); // Redirect to a confirmation page, if exists
  }
}
