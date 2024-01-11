import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParseService } from '../services/parse.service';
import { Message } from '../chat-page/message.model';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent {
  // lastSeen: Date = '';
  messages: Message[] = [];
  messageText: string = '';
  cardName: string = '';
  cardId: string = '';
  recieverID: string = '';
  conversationId: string = ''; 
  constructor(private route: ActivatedRoute, private parseService: ParseService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
       this.cardId = params.get('id') as string;
   
       this.getCardDetails();
       this.conversationId = this.route.snapshot.paramMap.get('conversationId') as string;
       this.loadMessages();
      // Fetch chat partner's name using cardId
      // Fetch messages for this chat
    });
  }

  async loadMessages() {
    // if (!this.conversationId) return;
    this.messages = await this.parseService.getMessages('dtILXvsC3t');
    console.log(this.messages);
  }

  async sendMessage() {
    // Call the sendMessage method from ParseService
    // Add the new message to the messages array
    this.messageText = ''; // Clear the input after sending
  }

  isMessageSentByCurrentUser(message: Message): boolean {
    return message.senderId === this.recieverID;
  }

  async onSendMessage(text: string ) {
    const senderId =  await this.parseService.user.objectId/* ID of the sender (student) */;
    const receiverId = this.recieverID/* ID of the receiver (teacher) */;
    
    try {
      const message = await this.parseService.sendMessage(senderId, receiverId, text);
      
      console.log(message.conversationId);
      // this.conversationId = message.conversationId;
   
    } catch (error) {
      // Handle the error here
    }
  }

  async getCardDetails() {
    try {
      const cardDetails = await this.parseService.getCardById(this.cardId);
      if (cardDetails.status === 1) {
       
        this.cardName = cardDetails.data.get("name");
        this.recieverID = cardDetails.data.get("object_Id_Of_signUpTeacher");

        // Handle other card details
      } else {
        // Handle the error case
      }
    } catch (error) {
      console.error('Error loading card details', error);
      // Handle the error
    }
  }


}
