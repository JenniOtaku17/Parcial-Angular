import { Component, OnInit } from '@angular/core';

import { AirportService } from '../service/airport.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  dataExtractor: any;

  flightListArray: any [];
  passengerListArray: any [];

  constructor( private airportService: AirportService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((z) =>{
      console.log(z);
      this.dataExtractor = z;
    })

    this.airportService.getFlightList().snapshotChanges().subscribe(item =>{
      this.flightListArray = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x['$key'] = element.key;
        this.flightListArray.push(x);
      });
    })

    this.airportService.getPassengerList().snapshotChanges().subscribe(item =>{
      this.passengerListArray = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x['$key'] = element.key;
        this.passengerListArray.push(x);
      });
    })
  }

}
