import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import { AboutComponent }      from '../about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/1', pathMatch: 'full' },
  { path: 'dashboard/:page',  component: DashboardComponent},
  { path: 'search/:keyword/:page', component: DashboardComponent},
  { path: 'about',  component: AboutComponent },
  { path: '**', redirectTo: '/dashboard/1', pathMatch: 'full' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
