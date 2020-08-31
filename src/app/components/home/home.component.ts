import { Component, OnInit } from '@angular/core';
import { DatesService } from 'src/app/services/dates.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dias:any [] = [];
  meses:any [] = [];
  dia:any;
  anio:any;
  diaNombre:any;
  mes:any;
  
  constructor( private datesService: DatesService) { }

  ngOnInit(): void {

    this.dias = this.datesService.getDias();
    this.meses = this.datesService.getMeses();
    this.dia = new Date().getDate();
    this.anio = new Date().getFullYear();
    this.formatoDia(this.dias);
    this.formatoMes(this.meses);


  }

  formatoDia(dias:any) {

    this.diaNombre = new Date().getDay();

    for (let i = 0; i < this.dias.length; i++) {
      if (this.diaNombre == i) {
        this.diaNombre = this.dias[i];
      }
      
    }

    return this.diaNombre;

  }

  formatoMes(meses:any) {

    this.mes = new Date().getMonth();
    console.log(this.mes);

    for (let i = 0; i < this.meses.length; i++) {
      if (this.mes == i) {
        this.mes = this.meses[i];
        console.log(this.mes);
      }
      
    }

    return this.mes;

  }

}
