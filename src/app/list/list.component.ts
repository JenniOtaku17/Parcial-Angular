import { Component, OnInit } from '@angular/core';
import { AirportService } from '../service/airport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  flightListArray: any [];

  constructor( private airportService: AirportService, private router : Router ) { }

  ngOnInit(): void {
    this.airportService.getFlightList().snapshotChanges().subscribe(item =>{
      this.flightListArray = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x['$key'] = element.key;
        this.flightListArray.push(x);
      });
    })
  }

  addPassenger( $key: string ){
    const dataToSend = {
      key: $key
    }
    //Enviando resultados a otra pagina
      this.router.navigate(['/passenger'], {queryParams: dataToSend});
    //Enviando resultados a otra pagina
  }

  seeDetails( $key: string ){

    const dataToSend = {
      key: $key
    }
    //Enviando resultados a otra pagina
      this.router.navigate(['/details'], {queryParams: dataToSend});
    //Enviando resultados a otra pagina
  }

}
