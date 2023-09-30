import { Component } from '@angular/core';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-requestforstudents',
  templateUrl: './requestforstudents.component.html',
  styleUrls: ['./requestforstudents.component.css']
})
export class RequestforstudentsComponent {
 back=faArrowLeft;
}
