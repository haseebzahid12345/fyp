import { Component ,OnInit } from '@angular/core';
import { ParseService } from '../services/parse.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  teacherData: any[] = [];
  user: any;

  constructor(private parseService: ParseService) {}



ngOnInit() {
  this.loadTeacherData();
  this.user = this.parseService.user;
}

async loadTeacherData(){
  try {
    console.log('inside function');
    const responseData = await this.parseService.getTeacherData();
    console.log(responseData);
    this.teacherData = responseData;
    console.log('inside function q');
  } catch (error) {
    console.error('Error loading teacher Data', error);
  }
}

}
