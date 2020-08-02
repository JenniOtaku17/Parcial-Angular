import { Component, OnInit } from '@angular/core';
import { AirportService } from '../service/airport.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  passengerListArray: any [];
  dataExtractor: any;

  formData = {
    nombre: null,
    apellido: null,
    edad: null,
    email: null
  };

  constructor( private airportService: AirportService, private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((z) =>{
      console.log(z);
      this.dataExtractor = z;
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
  
  savePassenger(){
    this.airportService.addPassenger(this.formData.nombre, this.formData.apellido, this.formData.edad, this.formData.email, this.dataExtractor.key);

    Swal.fire({
      icon: 'success',
      title: 'Pasajero agregado correctamente!',
      showConfirmButton: false,
      timer: 2000
    })

    this.router.navigate(['/list']);
  }

}
