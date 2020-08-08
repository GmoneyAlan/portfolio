import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ResumeComponent} from './resume/resume.component';
import { HomeComponent } from './home/home.component';

//Added routes to route sites
const routes: Routes = [
  {path: 'resume-component', component: ResumeComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
