import { Component, OnInit } from '@angular/core';
import { ApirestService } from 'src/app/services/apirest.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios:any [] = [];

  constructor( private apirest: ApirestService) { 

    this.apirest.getUsuarios()
    .subscribe( (data:any) =>{
      this.usuarios = data.detalle;
      console.log(this.usuarios);
    })
  }

  ngOnInit(): void {
  }

}
