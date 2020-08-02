import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list'},
  { path: 'flight', loadChildren: () => import('./flight/flight.module').then(m => m.FlightModule) }, 
  { path: 'passenger', loadChildren: () => import('./passenger/passenger.module').then(m => m.PassengerModule) },
  { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
  { path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
