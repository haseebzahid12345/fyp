import { Component } from '@angular/core';
import { ParseService } from '../services/parse.service';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  user: any;

  constructor(private parseService: ParseService) {}

  ngOnInit() {
    this.user = this.parseService.user;
  }
}
