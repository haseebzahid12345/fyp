import { Component } from '@angular/core';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  back=faArrowLeft;
}
