import { Component } from '@angular/core';
import { ParseService } from '../services/parse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-table',
  templateUrl: './message-table.component.html',
  styleUrls: ['./message-table.component.css']
})
export class MessageTableComponent {
  teacherData: any[] = [];
  constructor(private parseService: ParseService,private router: Router) {}
  async ngOnInit() {
    // try {
     

        const teacherIds = await this.parseService.getTeacherIdsByStudentId();
        console.log(teacherIds, 'student arrays matching with teacher id');

        // Assuming getStudentNamesByIds returns an array of objects with a 'name' property
        const teacher = await this.parseService.getTeacherDataByIds(teacherIds);
        console.log(teacher, 'full student data');
        this.teacherData = teacher;
        // Extracting only the names
        // Assuming students is an array of objects with a 'name' property
        // this.studentNames = (students as any[]).map(student => student.name);
        
        console.log(this.teacherData, 'student names');
      
    // } catch (error) {
    //   console.error('Errorjklk:', error);
    // }
  }

   
onRowClick(id1: string) {
  
  console.log('Clicked on:', id1);
  this.router.navigate(['/chat-page' , id1]);
  }
}
