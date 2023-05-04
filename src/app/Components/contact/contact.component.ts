import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from 'src/app/Services/http.service';
export class Contact {
  Id?:number;
  name?:string;
  email?:string;
  content?:string;
  like?:number;
  disLike?:number;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  message:any;

  @Output()
  onSaveContact:EventEmitter<Contact>=new EventEmitter<Contact>();

  newJob:Contact={};
  constructor(public http:HttpService) {
    this.message=http.getMessage();

  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("הפרטים נשלחו בהצלחה, נציג שלנו יצור עמך קשר תוך 24 שעות");
  }
}
