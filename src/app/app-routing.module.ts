import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ResumeComponent} from './resume/resume.component';
import { AppComponent } from './app.component';

//Added routes to route sites
const routes: Routes = [
  {path: 'resume-component', component: ResumeComponent},
  {path: 'app-component', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
