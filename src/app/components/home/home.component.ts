import { Component, OnInit } from '@angular/core';
import { DatesService } from 'src/app/services/dates.service';
import { ApirestService } from 'src/app/services/apirest.service';

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
  tareas: any [] = [];
  totalTareas: any [] = [];
  
  constructor( private datesService: DatesService,
                private apirest: ApirestService) {

    this.apirest.getTareas()
    .subscribe( (data:any) =>{
      this.totalTareas = data;
      this.tareas = data.detalle;
      console.log(this.totalTareas);
      console.log(this.tareas);
    })
   }

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
