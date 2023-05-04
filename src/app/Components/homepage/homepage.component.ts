import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  message:any;


  constructor(private http: HttpService) {     
    this.message=http.getMessage();
  }

  ngOnInit(): void {
  }

}
