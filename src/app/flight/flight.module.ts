import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightComponent } from './flight.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FlightComponent],
  imports: [
    CommonModule,
    FlightRoutingModule,
    FormsModule
  ]
})
export class FlightModule { }
