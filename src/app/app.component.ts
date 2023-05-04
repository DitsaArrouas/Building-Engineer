import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from './Services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project';
  message:any;
  constructor(public http:HttpService){
    this.message = http.getMessage();
    //this.message = "10% הנחה מתנה למגיב";
  }
}
