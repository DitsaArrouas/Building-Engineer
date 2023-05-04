import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, observable, Subscription } from 'rxjs';
import { Feedback } from '../../Classes/feedback';
import { HttpService } from '../../Services/http.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit, OnDestroy {
  message: any;
  feedbacks: Array<Feedback> = [];
  subsciption: Subscription = new Subscription;
  showAddFeedback: boolean = false;

  constructor(public route: Router, private http: HttpService) {
    this.message = http.getMessage();
  }
  model: string = "ngModel";
  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }

  ngOnInit(): void {
    this.subsciption = this.http.getAllFeedback().subscribe((data) => {
      this.feedbacks = data;
      console.log('data', this.feedbacks);
    }, (err) => {
      console.log('error!');
    })
  }

  like(Id: any): void {
    this.subsciption = this.http.putFeedback(Id).subscribe((data) => {
      this.feedbacks = data;
    }, (err) => {
      console.log('error!');
    })
  }
  dislike(Id: any): void {
    Id = Id * (-1);
    this.subsciption = this.http.putFeedback(Id).subscribe((data) => {
      this.feedbacks = data;
    }, (err) => {
      console.log('error!');
    })
  }

  addFeedback() {
    this.showAddFeedback = false;
  }
}
