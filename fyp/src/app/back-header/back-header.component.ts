import { Component } from '@angular/core';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-back-header',
  templateUrl: './back-header.component.html',
  styleUrl: './back-header.component.css'
})
export class BackHeaderComponent {
  back=faArrowLeft;
}
