import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyService } from 'src/app/Classes/my-service';
import { HttpService } from 'src/app/Services/http.service';
import { MyServicesComponent } from '../my-services/my-services.component';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  message: any;
  @Input()
  ServiceFromRoute: any = {};
  constructor(private http: HttpService, public route: ActivatedRoute, public Ser: MyServicesComponent) {
    this.message = http.getMessage();
    route.params.subscribe((p) => {
      let title = p["title"];
      this.ServiceFromRoute = Ser.services.find(i => i.title == title);
    })
  }

  ngOnInit(): void {
  }

}
