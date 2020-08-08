import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ResumeComponent} from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import {DonateComponent} from './donate/donate.component';

//Added routes to route sites
const routes: Routes = [
  {path: 'resume', component: ResumeComponent},
  {path: '', component: HomeComponent},
  {path: 'donate', component: DonateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
