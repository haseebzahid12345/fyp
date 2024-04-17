import { Component } from '@angular/core';

@Component({
  selector: 'app-paymentcard',
  templateUrl: './paymentcard.component.html',
  styleUrls: ['./paymentcard.component.css']
})
export class PaymentcardComponent {
title='AngularGooglePlay';
buttonColor = 'black';
buttonType = 'order';
isCustomSize = 250;
buttonHeight = 50;
isTop =  window ===window.top;
paymentRequest = {
  apiVersion:2,
  apiVersionMinor:0,
  allowPaymentMethods:[
    {type:"CARD",
      parameters:{
        allowedPaymentMethods:["PAN_ONLY","CRYPTOGRAM_305"],
        allowedCardNetworks:["AMEX","VISA","MASTERCARD" ]
      },
      tokenizationSpecification:{
        type:"PAYMENT_GATEWAY",
        parameters:{
          gateway:"example",
          gatewayMerchantI:"exampleGatewayMerchant"
        }
      }
    }

  ],
  maerchantInfo:{
    merchantId:"1234567890234567890",
    merchantName:"demo Merchant"
  },
  transactionInfo:{ 
    totalPriceStatus:"FINAL",
    totalPriceLAbel:"total",
    totalPrice:"100.00",
    currencyCode:"USD",
    countryCode:"US",

  }
};
onLoadPaymentData(event : any ): void{
  console.log("load payment data by skillMentor " , event.detail)
}

}
