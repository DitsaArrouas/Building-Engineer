import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Feedback } from 'src/app/Classes/feedback';
import { HttpService } from 'src/app/Services/http.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss']
})

export class AddFeedbackComponent implements OnInit {
  message:any;
[x: string]: any;
  subsciption:Subscription=new Subscription;
  feedbacks: Array<Feedback>= [];
  newFeedback:Feedback=new Feedback();
  profileForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(2)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    content: new FormControl('',[Validators.required,Validators.maxLength(500)]),});
  constructor(public http:HttpService) {
    this.message=http.getMessage();
   }

  ngOnInit(): void {
  
  }
  onSubmit() {
    this.newFeedback = {name:this.profileForm.value.name+"",email:this.profileForm.value.email+"",content:this.profileForm.value.content+""};

    this.subsciption=this.http.addFeedback(this.newFeedback).subscribe((data)=>{
      this.feedbacks=data;
      console.log('data',this.feedbacks);
    },(err)=>{
      console.log('error!');
    })
    this.http.setMessage("הנך זכאי ל10% הנחה מתנה");
    closed;
  }
  
}
