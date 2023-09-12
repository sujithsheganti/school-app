import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { yGuard } from './y.guard';

const routes: Routes = [

  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent, canActivate:[yGuard],children:[
  {path:"home",component:HomeComponent},
  {path:"createstudent",component:CreatestudentComponent},
  {path:"allstudents",component:AllstudentsComponent}
  ]}

  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
