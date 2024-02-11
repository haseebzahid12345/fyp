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
  teacherName: string = '';
  cardId: string = '';
  TeacherID: string = '';
  StudentID:string = '';
  teacherCatchId:string = '';

  conversationId: string = ''; 
  constructor(private route: ActivatedRoute, private parseService: ParseService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // this.cardId = '';
       this.cardId = params.get('id') as string;
      //  this.teacherCatchId = params.get('id1') as string;
      //  console.log(this.teacherCatchId);
       console.log(this.cardId);
   
       this.getCardDetails();
      
    });
  }

  async loadMessages() {
    if (!this.conversationId) return;
    this.messages = await this.parseService.getMessages(this.conversationId);
    console.log('messages load', this.messages , this.conversationId);
    console.log(this.messages);
  }



  isMessageSentByCurrentUser(message: Message): boolean {
    // Assuming `message.sender1` holds the value for the 'sender1' field
    return message.senderId === this.StudentID;
  }
  async onSendMessage(text: string ) {
    const senderId =  await this.parseService.user.objectId/* ID of the sender (student) */;
    const receiverId = this.TeacherID/* ID of the receiver (teacher) */;
    
    try {
      const message = await this.parseService.sendMessage(senderId, receiverId, text);
      
      console.log(message.conversationId);
      this.conversationId = message.conversationId;
   
    } catch (error) {
      // Handle the error here
    }
  }

  async getCardDetails() {
     console.log('inside get card details');
      const cardDetails = await this.parseService.getGigById(this.cardId);
      console.log(cardDetails,'123','successs');
      if (cardDetails.status === 1) {
       
        this.teacherName = cardDetails.data.user.firstname;
        this.TeacherID = cardDetails.data.user.userId;
        console.log(cardDetails.data.user.userId);
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
      } 
      else {

        
          console.log(this.teacherCatchId);
          const teacherDetails = await this.parseService.getTeacherById(this.cardId);
           
            this.teacherName = teacherDetails.data.get("firstname");
            this.StudentID= await this.parseService.user.objectId;
            const conversationResult = await this.getConversationID(this.cardId, this.StudentID);
          if(conversationResult){
            this.conversationId = conversationResult;
            console.log(this.conversationId,'123','successs');
            await this.loadMessages();
    
          }
          else {
            console.log('No conversation found');
          }
 
      }

  }

  async getConversationID(TeacherID : string ,  StudentID :  string ){
  const id_get = await this.parseService.getConversationID(TeacherID, StudentID);
  console.log(id_get);
    return id_get;
   
}



}
