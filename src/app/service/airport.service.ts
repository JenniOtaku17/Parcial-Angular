import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  flightList: AngularFireList<any>;
  passengerList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) { }

  getFlightList(){
    this.flightList = this.firebasedb.list('titles');
    return this.flightList;
  }

  getPassengerList(){
    this.passengerList = this.firebasedb.list('passengers');
    return this.passengerList;
  }

  addFlight(hora: string, tiempo: string, pais: string){
    this.flightList.push({
      hora: hora,
      tiempo: tiempo,
      pais: pais
    });
  }

  addPassenger(nombre: string, apellido: string, edad: number, email: string, vuelo: string){
    this.passengerList.push({
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      email: email,
      vuelo: vuelo
    });
  }

}
