import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ParseService } from '../services/parse.service';


@Component({
  selector: 'app-paymentcard',
  templateUrl: './paymentcard.component.html',
  styleUrls: ['./paymentcard.component.css']
})
export class PaymentcardComponent {
  price: string='';
  cardId : string ='';
  studentId: any;
  teacherId:string='';
  orderDay:string ='';
  titles:string='';
  constructor(private route: ActivatedRoute , private router: Router , private service: ParseService) {}

  ngOnInit() {
    // this.service.pageView(localStorage['appSessionId'],"/transaction");
    this.route.queryParams.subscribe(params => {
      this.price = params['price'];
      this.cardId = params['cardId'];
      this.teacherId = params['teacherId'];
      this.studentId = this.service.user.objectId;
      this.orderDay= params['orderDay'];
      this.titles = params['title'];
    
    });
  }
  title = 'AngularGooglePlay';
  buttonColor = 'black';
  buttonType = 'buy';
  isCustomSize = 250;
  buttonHeight = 50;
  isTop = window === window.top;
  paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchant"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "1234567890234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "USD",
      countryCode: "US"
    },
    callbackIntents: ["PAYMENT_AUTHORIZATION"]
  };

  onLoadPaymentData(event: any): void {
    console.log("Payment data loaded", event.detail);
    this.onPaymentAuthorized(event);
  }

 onPaymentAuthorized(event: any) {
    console.log("Payment authorized", event.detail);
    setTimeout(async () => {
    
      const result = await this.service.orderPlaceTransaction(this.cardId,this.teacherId,this.studentId,this.price,this.orderDay,this.title);
      if(result.status===0){
        alert('Your order has been placed!');
      }
      else if(result.status===1){
        alert('Transaction successful!');
      }
    }, 1000); // 3000 milliseconds = 3 seconds
  }

  // onPaymentDataChanged(event: any): void {
  //   console.log("Payment data changed", event.detail);
  // }
}
