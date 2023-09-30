import { Component } from '@angular/core';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-filterteachers',
  templateUrl: './filterteachers.component.html',
  styleUrls: ['./filterteachers.component.css']
})
export class FilterteachersComponent {
  back=faArrowLeft;
}
