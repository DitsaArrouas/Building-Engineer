import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MyService } from 'src/app/Classes/my-service';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent implements OnInit {
  message:any;
  services: Array<MyService>= [];
  subsciption:Subscription=new Subscription;
  constructor(private http: HttpService,public route:Router) { 
    this.message=http.getMessage();

  }

  model:string="ngModel";
  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }

  ngOnInit(): void {
    console.log('before data');
    this.subsciption=this.http.getAllService().subscribe((data)=>{
      this.services=data;
      console.log('data',this.services);
    },(err)=>{
      console.log('error!');
    })


    // this.subsciption=this.http.addFeedback(this.newFeedback).subscribe((data)=>{
    //   this.feedbacks=data;
    //   console.log('data',this.feedbacks);
    // },(err)=>{
    //   console.log('error!');
    // })

    
    console.log('after subscribe');
  }
  moreDetails(title:any){
    this.route.navigate(['/services/details/'+title]);
  }
}

