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
  tareasCompletadas: any[] = [];
  tareasInicio: any [] = [];
  totalTareasCompletadas: number;
  totalTareasInicio: number;
  totalTareasProceso: number;
  totalTareasPendiente: number;
  tareasProceso: any [] = [];;
  tareasPendientes: any [] = [];;
  
  constructor( private datesService: DatesService,
                private apirest: ApirestService) {

    this.apirest.getTareas()
    .subscribe( (data:any) =>{
      this.totalTareas = data;
      this.tareas = data.detalle;
    })

    this.mostrarTareas();
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

    for (let i = 0; i < this.meses.length; i++) {
      if (this.mes == i) {
        this.mes = this.meses[i];
      }
      
    }

    return this.mes;

  }

  mostrarTareas(){

    this.apirest.getTareas()
    .subscribe( (data:any) => {
      this.tareas = data.detalle;
      console.log(this.tareas);
      this.tareas.forEach((tarea) => {
        if (tarea.estado === "Inicio") {
          this.tareasInicio.push(tarea);
          this.totalTareasInicio = + 1
        }
        if (tarea.estado === "Proceso") {
          this.tareasProceso.push(tarea);
        }
        if (tarea.estado === "Pendientes") {
          this.tareasPendientes.push(tarea);
        }
        if (tarea.estado === "Completada") {
          this.tareasCompletadas.push(tarea);
          this.totalTareasCompletadas = + 1
        }
      });

      console.log(this.tareasCompletadas.length);
    });

  }

}
