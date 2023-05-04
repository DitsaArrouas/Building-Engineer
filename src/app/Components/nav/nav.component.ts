import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  message:any;
  constructor(public http:HttpService){

    //this.message = "10% הנחה מתנה למגיב";
  }
  ngOnInit(): void {
    this.http.getMessage().subscribe((data)=>{
      this.message =data});
  }

}
