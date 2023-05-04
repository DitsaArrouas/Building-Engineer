import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { FeedbacksComponent } from './Components/feedbacks/feedbacks.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { MyServicesComponent } from './Components/my-services/my-services.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ServiceDetailsComponent } from './Components/service-details/service-details.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"services",component:MyServicesComponent,children:[
    {path:"details/:title",component:ServiceDetailsComponent},
  ]},
  {path:"feedback",component:FeedbacksComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:NotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
