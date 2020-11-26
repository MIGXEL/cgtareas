import { Component, OnInit } from '@angular/core';
import { ApirestService } from 'src/app/services/apirest.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tareas:any[] = [];
  fechaFormat: any;
  fechaInicio: any;

  constructor(private apiServices: ApirestService) { }

  ngOnInit(): void {

    this.getTareas();
  }

  createTarea(){

    this.apiServices.createTarea();

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

  getTarea(id){

    this.apiServices.getTarea(id);

  }

  updateTarea(id){

    /* this.api.updateTarea(id); */

  }

  deleteTarea(id){

    this.apiServices.deleteTarea(id);

  }

}
