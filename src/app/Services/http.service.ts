import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../Classes/feedback';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MyService } from '../Classes/my-service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  env = environment;

  constructor(private http: HttpClient) { 
  }

  getAllFeedback():Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.env.URL+"/Feedback");
  }
  getAllService():Observable<MyService[]>{
    return this.http.get<MyService[]>(this.env.URL+"/Service");
  }
  addFeedback(feedback:Feedback):Observable<Feedback[]>{
    return this.http.post<Feedback[]>(this.env.URL+"/Feedback",feedback);
  }
  putFeedback(Id:number):Observable<Feedback[]>{
    return this.http.put<Feedback[]>(this.env.URL+"/Feedback/5",Id);
  }
  private message$:BehaviorSubject<any>=new BehaviorSubject<any>("10% הנחה מתנה למגיב");
  //public message$:Observable<string>=this.m$.asObservable();

  setMessage(value:any){
    this.message$.next(value);
  }
  getMessage():Observable<any>{
    //alert(this.message$);
    return this.message$;
  }
}
