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
  TeacherID: string = '';
  StudentID:string = '';

  conversationId: string = ''; 
  constructor(private route: ActivatedRoute, private parseService: ParseService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
       this.cardId = params.get('id') as string;
      //  console.log(this.conversationId);
   
       this.getCardDetails();
      // this.conversationId = this.route.snapshot.paramMap.get('conversationId') as string;
     
      // Fetch chat partner's name using cardId
      // Fetch messages for this chat
    });
  }

  async loadMessages() {
    // if (!this.conversationId) return;
    this.messages = await this.parseService.getMessages(this.conversationId);
    console.log('messages load', this.messages , this.conversationId);
    console.log(this.messages);
  }

  async sendMessage() {
    // Call the sendMessage method from ParseService
    // Add the new message to the messages array
    this.messageText = ''; // Clear the input after sending
  }

  isMessageSentByCurrentUser(message: Message): boolean {
    // Assuming `message.sender1` holds the value for the 'sender1' field
    return message.sender1 === 'nullIndicator' || message.senderId === this.StudentID;
  }
  async onSendMessage(text: string ) {
    const senderId =  await this.parseService.user.objectId/* ID of the sender (student) */;
    const receiverId = this.TeacherID/* ID of the receiver (teacher) */;
    
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
        this.TeacherID = cardDetails.data.get("object_Id_Of_signUpTeacher");
        this.StudentID = await this.parseService.user.objectId;
      const conversationResult = await this.getConversationID(this.TeacherID, this.StudentID);
      if(conversationResult){
        this.conversationId = conversationResult;
        console.log(this.conversationId,'123','successs');
        await this.loadMessages();

      }
      else {
        console.log('No conversation found');
      }

        // Handle other card details
      } else {
        console.log('Error loading card details');
      }
    } catch (error) {
      console.error('Error loading card details', error);
      // Handle the error
    }
  }

  async getConversationID(TeacherID : string ,  StudentID :  string ){
  const id_get = await this.parseService.getConversationID(TeacherID, StudentID);
  console.log(id_get);
    return id_get;
   
}



}
