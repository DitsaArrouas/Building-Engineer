import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { FeedbacksComponent } from './Components/feedbacks/feedbacks.component';
import { HttpClientModule } from '@angular/common/http';
import { MyServicesComponent } from './Components/my-services/my-services.component';
import { ServiceDetailsComponent } from './Components/service-details/service-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFeedbackComponent } from './Components/add-feedback/add-feedback.component';
import { NavComponent } from './Components/nav/nav.component';
import { MouseDirective } from './mouse.directive';
import { QuotationMarksPipe } from './quotation-marks.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FeedbacksComponent,
    MyServicesComponent,
    ServiceDetailsComponent,
    AddFeedbackComponent,
    NavComponent,
    MouseDirective,
    QuotationMarksPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
