import { Component, OnInit } from '@angular/core';
import { AirportService } from '../service/airport.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

    //Objeto para los valores del formulario
    formData = {
      hora: null,
      tiempo: null,
      pais: null
    };
    //Objeto para los valores del formulario
  
    //cargando arreglo
    paisList = [
      'Afganistán',
      'Albania',
      'Alemania',
      'Andorra ',
      'Angola ',
      'Antigua y Barbuda',
      'Arabia Saudita',
      'Argelia',
      'Argentina',
      'Armenia ',
      'Australia ',
      'Austria ',
      'Azerbaiyán ',
      'Bahamas ',
      'Bangladés ',
      'Barbados ',
      'Baréin ',
      'Bélgica ',
      'Belice ',
      'Benín ',
      'Bielorrusia',
      'Birmania / Myanmar',
      'Bolivia',
      'Bosnia y Herzegovina ',
      'Botsuana ',
      'Brasil',
      'Brunéi',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Bután',
      'Cabo Verde',
      'Camboya',
      'Camerún',
      'Canadá',
      'Catar',
      'Chad ',
      'Chile ',
      'China ',
      'Chipre',
      'Ciudad del Vaticano',
      'Colombia',
      'Comoras',
      'Corea del Norte',
      'Corea del Sur',
      'Costa de Marfil',
      'Costa Rica',
      'Croacia',
      'Cuba',
      'Dinamarca ',
      'Dominica',
      'Ecuador',
      'Egipto',
      'El Salvador',
      'Emiratos Árabes Unidos',
      'Eritrea',
      'Eslovaquia ',
      'Eslovenia ',
      'España ',
      'Estados Unidos ',
      'Estonia ',
      'Etiopía ',
      'Filipinas ',
      'Finlandia ',
      'Fiyi ',
      'Francia ',
      'Gabón ',
      'Gambia ',
      'Georgia',
      'Ghana ',
      'Granada ',
      'Grecia',
      'Guatemala ',
      'Guinea Ecuatorial',
      'Guinea',
      'Guinea-Bisáu ',
      'Guyana',
      'Haití',
      'Honduras ',
      'Hungría',
      'India',
      'Indonesia ',
      'Irak',
      'Irán ',
      'Irlanda',
      'Islandia',
      'Islas Marshall',
      'Islas Salomón',
      'Israel ',
      'Italia',
      'Jamaica',
      'Japón',
      'Jordania ',
      'Kazajistán',
      'Kenia',
      'Kirguistán',
      'Kiribati',
      'Kuwait',
      'Laos',
      'Lesoto ',
      'Letonia ',
      'Líbano ',
      'Liberia ',
      'Libia',
      'Liechtenstein ',
      'Lituania ',
      'Luxemburgo ',
      'Macedonia del Norte ',
      'Madagascar ',
      'Malasia',
      'Malaui ',
      'Maldivas ',
      'Malí o Mali',
      'Malta',
      'Marruecos',
      'Mauricio',
      'Mauritania',
      'México',
      'Micronesia',
      'Moldavia',
      'Mónaco ',
      'Mongolia ',
      'Montenegro ',
      'Mozambique ',
      'Namibia ',
      'Nauru ',
      'Nepal ',
      'Nicaragua ',
      'Níger ',
      'Nigeria ',
      'Noruega ',
      'Nueva Zelanda ',
      'Omán ',
      'Países Bajos',
      'Pakistán',
      'Palaos ',
      'Panamá ',
      'Papúa Nueva Guinea',
      'Paraguay ',
      'Perú ',
      'Polonia ',
      'Portugal ',
      'Reino Unido ',
      'República Centroafricana ',
      'República Checa',
      'República del Congo',
      'República Democrática del Congo',
      'República Dominicana ',
      'Ruanda ',
      'Rumanía ',
      'Rusia ',
      'Samoa ',
      'San Cristóbal y Nieves',
      'San Marino',
      'San Vicente y las Granadinas ',
      "Santa Lucía",
      'Santo Tomé y Príncipe',
      'Senegal ',
      'Serbia ',
      'Seychelles ',
      'Sierra Leona ',
      'Singapur ',
      'Siria ',
      'Somalia ',
      "Sri Lanka ",
      "Suazilandia",
      "Sudáfrica ",
      "Sudán del Sur ",
      "Sudán ",
      "Suecia ",
      "Suiza ",
      "Surinam ",
      "Tailandia ",
      "Tanzania ",
      "Tayikistán ",
      "Timor Oriental ",
      "Togo ",
      "Tonga ",
      "Trinidad y Tobago ",
      "Túnez ",
      "Turkmenistán",
      "Turquía ",
      "Tuvalu ",
      "Ucrania ",
      "Uganda ",
      "Uruguay ",
      "Uzbekistán",
      "Vanuatu",
      "Venezuela",
      "Vietnam",
      "Yemen",
      "Yibuti ",
      "Zambia .",
      "Zimbabue "
    ];


    //cargando arreglo

    flightListArray: any [];

  constructor(private airportService: AirportService, private router: Router) { }

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

  saveFlight(){
    this.airportService.addFlight(this.formData.hora, this.formData.tiempo, this.formData.pais);  

    Swal.fire({
      icon: 'success',
      title: 'Vuelo agregado correctamente!',
      showConfirmButton: false,
      timer: 2000
    })

    this.router.navigate(['/list']);
  }

}
