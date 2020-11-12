import { Component, OnInit } from '@angular/core';
import { ApirestService } from 'src/app/services/apirest.service';
import { DatesService } from 'src/app/services/dates.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  tareas:any[] = [];
  fechaArr:any[] = [];
  fechaFormat:any;
  mes: any;
  fechaInicio: any;

  constructor( private apiServices: ApirestService,
              private formatDate: DatesService) {
    this.getTareas();
   }

  ngOnInit(): void {
  }

  getTareas(){
    this.apiServices.getTareas()
    .subscribe( (data:any) => {
      this.tareas = data.detalle;
      console.log(this.tareas);
      this.tareas.forEach(fechs => {
        
        this.fechaFormat = new Date(parseInt(fechs.fecha_inicio));
        this.fechaInicio = this.fechaFormat.toLocaleDateString();
        fechs.fecha_inicio = this.fechaInicio;

      });
      
    })

  }

  /* fecha(date:any){
    this.fechaFormat = new Date(date);
    this.mes = this.fechaFormat.getMonth()
    console.log(this.mes);
    console.log(this.fechaFormat.getMonth());
  } */

}
