import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerRoutingModule } from './passenger-routing.module';
import { PassengerComponent } from './passenger.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PassengerComponent],
  imports: [
    CommonModule,
    PassengerRoutingModule,
    FormsModule
  ]
})
export class PassengerModule { }


