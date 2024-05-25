import { Component } from '@angular/core';

@Component({
  selector: 'app-paymentcard',
  templateUrl: './paymentcard.component.html',
  styleUrls: ['./paymentcard.component.css']
})
export class PaymentcardComponent {
  title = 'AngularGooglePlay';
  buttonColor = 'black';
  buttonType = 'buy';  // Updated to match the HTML example
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
    }
  };

  onLoadPaymentData(event: any): void {
    // alert("successfully purchase done");
    console.log("load payment data by skillMentor", event.detail);
  }
}
