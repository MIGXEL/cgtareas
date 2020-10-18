import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


import { ApirestService } from 'src/app/services/apirest.service';
import { UserModel } from '../../models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuario: UserModel;
  usuarios: any[] = [];
  usuarioLocal: any[] = [];
  mensaje: string = '';
  error: boolean = false;

  constructor(private apirest: ApirestService) {

    this.usuario = new UserModel();

    this.apirest.getUsuarios()
      .subscribe((data: any) => {
        this.usuarios = data.detalle;
      })
  }

  ngOnInit(): void {
    this.usuarioLocal = JSON.parse(localStorage.getItem('usuario'));
    console.log('local Storage: ', this.usuarioLocal);
  }

  nuevoUsuario(form: NgForm) {
    console.log(form);
    if (form.touched) {
      this.error = false;
      console.log(form.value);

      if (form.value["nombre"] === undefined) {

        this.mensaje = "Campo nombre esta vacio"
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
        return

      }

      if (form.value["apellido"] === undefined) {

        this.mensaje = "Campo apellido esta vacio"
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
        return

      }

      if (form.value["email"] === undefined) {

        this.mensaje = "Campo correo esta vacio"
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);

        return

      }
      Swal.fire({
        allowOutsideClick: false,
        title: `Creando usuario`,
        onBeforeOpen: () => {
          Swal.showLoading()
        }
      })
      this.apirest.createUser(this.usuario)
        .then(resp => {


          console.log(resp);

          if (resp.status === 200) {
            Swal.close();
            this.apirest.getUsuarios()
              .subscribe((data: any) => {
                this.usuarios = data.detalle;
              })
          } else {

            this.mensaje = resp.mensaje;
            this.error = true;
            setTimeout(() => {
              this.error = false;
            }, 3000);

          }
        })

    } else {

      this.mensaje = "Los Campos no deben estar vacios"
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 3000);

    }

    console.log();

  }

}
