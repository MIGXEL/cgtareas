import { Component, OnInit } from '@angular/core';
import { ApirestService } from 'src/app/services/apirest.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tareas:any[] = [];

  constructor(private api: ApirestService) { }

  ngOnInit(): void {

    this.getTareas();
  }

  createTarea(){

    this.api.createTarea();

  }

  getTareas(){

    this.api.getTareas().subscribe( (tareas:any) =>{
      this.tareas = tareas.detalle;
      console.log(this.tareas);
    } )

  }

  getTarea(id){

    this.api.getTarea(id);

  }

  updateTarea(id){

    /* this.api.updateTarea(id); */

  }

  deleteTarea(id){

    this.api.deleteTarea(id);

  }

}
