import { Component } from '@angular/core';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filterstudent',
  templateUrl: './filterstudent.component.html',
  styleUrls: ['./filterstudent.component.css']
})
export class FilterstudentComponent {
  back=faArrowLeft;
}
